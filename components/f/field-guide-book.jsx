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
		"content": `<style>.ksqtmx_le {
  d: path("M14.75 15.5c0-4 1.5-6 3.25-6.5c.25 3.5-.75 6.25-3.25 6.5Z");
}

.kzd0t558f {
  d: path("M12 6C9.5 4.5 6 4.25 3 5v14c3-.75 6.5-.5 9 1c2.5-1.5 6-1.75 9-1V5c-3-.75-6.5-.5-9 1Zm0 0v14");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kzd0t558f"/><path class="ksqtmx_le"/></g>`,
		"fallback": "uix-sharp:field-guide-book",
	});
}

export default Component;
