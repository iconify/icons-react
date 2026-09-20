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
		"content": `<style>.v3w_a-bvj {
  fill: currentColor;
  d: path("M3.28 2.22a.75.75 0 1 0-1.06 1.06l3.004 3.005c-.429.9-.683 1.9-.72 2.956l-.004.25v4.012l-1.415 3.16a.95.95 0 0 0 .867 1.338h12.989l3.778 3.78a.75.75 0 0 0 1.061-1.061zm17.722 14.832a.95.95 0 0 1-.194.574L7.051 3.87A7.5 7.5 0 0 1 19.5 9.504v3.998l1.417 3.16a.95.95 0 0 1 .084.39m-6.044 1.951a3 3 0 0 1-5.916 0z");
}
</style><path class="v3w_a-bvj"/>`,
		"fallback": "fluent:alert-off-24-filled",
	});
}

export default Component;
