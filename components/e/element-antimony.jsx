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
		"content": `<style>.ny29ybbdl {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m7.318 9.289l1.041-2.5Q9 5.249 10.667 5.25h2.666Q15 5.249 15.641 6.789l1.041 2.5q.426 1.022-.009 1.961h1.16q1.667-.001 2.308 1.539l1.041 2.5q.515 1.234-.227 2.348t-2.08 1.113H5.125q-1.338 0-2.08-1.113q-.742-1.114-.227-2.348l1.041-2.5q.641-1.54 2.308-1.539h1.16q-.435-.939-.009-1.961");
}
</style><path class="ny29ybbdl"/>`,
		"fallback": "uix-solid:element-antimony",
	});
}

export default Component;
