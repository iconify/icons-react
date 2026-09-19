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
		"content": `<style>.edc_91b3g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.991 20.501L11.009 5.5v30.001zm-25.982 18.5L36.991 24M11.009 42.5l25.982-15.001");
}
</style><path class="edc_91b3g"/>`,
		"fallback": "arcticons:audioteka",
	});
}

export default Component;
