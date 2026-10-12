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
		"content": `<style>.ykshg17or {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.44 16.02l7.08-7.08q.71-.71 1.43-1.4l.15-.15q.72-.69 1.58-1.2l.76-.46l.86-.51l.71.71l1.06 1.06l.71.71l-.86.51l-.76.46l-.86.51l-.2.98l-.13.63l-.2.98l-.71.71l-7.08 7.08l-.71.71l-.71-.71l-2.12-2.12l-.71-.71zm2.12-2.12l3.54 3.54m-1.07-6.01l3.54 3.54");
}
</style><path class="ykshg17or"/>`,
		"fallback": "iconoven:cast-arm-sharp",
	});
}

export default Component;
