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
		"content": `<style>.hys4azm2f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 2.75h10.5V7H7v8.25H2.75V2.75zm14.5 18.5H8.75V17H17V8.75h4.25v12.5z");
}
</style><path class="hys4azm2f"/>`,
		"fallback": "iconoven:boolean-exclude-sharp",
	});
}

export default Component;
