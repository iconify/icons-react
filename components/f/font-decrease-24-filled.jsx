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
		"content": `<style>.bey4oibjt {
  fill: currentColor;
  d: path("M16.625 2.22a1 1 0 1 0-1.25 1.56l2.5 2a1 1 0 0 0 1.25 0l2.5-2a1 1 0 0 0-1.25-1.56L18.5 3.72zM12 4a1 1 0 0 1 .92.606l5.999 14a1 1 0 0 1-1.838.788L15.198 15H8.802L6.92 19.394a1 1 0 0 1-1.838-.788l6-14A1 1 0 0 1 12 4m0 3.539l-2.34 5.46h4.68z");
}
</style><path class="bey4oibjt"/>`,
		"fallback": "fluent:font-decrease-24-filled",
	});
}

export default Component;
