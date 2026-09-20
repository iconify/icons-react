import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bbrk_ccdi {
  d: path("M12.489 4C9.43 4 7 6.213 7 9.5c0 3.387 2.527 6 5.489 6c.743 0 1.451-.161 2.098-.454a1 1 0 1 1 .826 1.821a7.1 7.1 0 0 1-2.924.633C8.283 17.5 5 13.845 5 9.5C5 5.055 8.38 2 12.489 2q1.855.001 3.574 1.174a1 1 0 1 1-1.126 1.652C14.08 4.242 13.274 4 12.489 4");
}

.n1lsf0bnc {
  fill: currentColor;
  fill-rule: evenodd;
}

.vuyj68bad {
  d: path("M3 8a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 3.5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1");
}
</style><g clip-rule="evenodd" class="n1lsf0bnc"><path class="bbrk_ccdi"/><path class="vuyj68bad"/></g>`,
		"fallback": "pepicons-pop:euro",
	});
}

export default Component;
