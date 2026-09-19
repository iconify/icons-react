import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.a66ffrb2r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.929 30.479h6.141v11.085h-6.141zm10.053 0h6.141v6.141h-6.141zm3.267-16.65V9.104h-6.551M10.877 30.479h6.141v6.141h-6.141z");
}

.xoefvzb2r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.872 18.607L24 6.436L7.128 18.607v22.957h33.744zM4.5 20.503l2.628-1.896M43.5 20.503l-2.628-1.896");
}
</style><path class="xoefvzb2r"/><path class="a66ffrb2r"/>`,
		"fallback": "arcticons:indoormap",
	});
}

export default Component;
