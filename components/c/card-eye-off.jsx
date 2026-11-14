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
		"content": `<style>.zz8f0jbsv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.3 19H2.5V5h19v6.6m-19-2.1h19m-19 0h19M6 15h2.5m6.5 3q1.5-2.25 3-2.25T21 18q-1.5 2.25-3 2.25T15 18Zm0 3l6-6");
}
</style><path class="zz8f0jbsv"/>`,
		"fallback": "uix-sharp:card-eye-off",
	});
}

export default Component;
