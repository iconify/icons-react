import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ci5--jakz {
  fill: var(--svg-color--0c0e15, #0c0e15);
  d: path("M12 13.125a1.125 1.125 0 1 0 0-2.25a1.125 1.125 0 0 0 0 2.25");
}

.ft5dv1b6b {
  fill: none;
}

.spzqy-zum {
  fill: var(--svg-color--000, #000);
  fill-rule: evenodd;
  d: path("M12 19.875a7.875 7.875 0 1 0 0-15.75a7.875 7.875 0 0 0 0 15.75M12 21a9 9 0 0 0 9-9a9 9 0 0 0-9-9a9 9 0 0 0-9 9a9 9 0 0 0 9 9");
}
</style><g class="ft5dv1b6b"><path clip-rule="evenodd" class="spzqy-zum"/><path class="ci5--jakz"/></g>`,
		"fallback": "token-branded:cnd",
	});
}

export default Component;
