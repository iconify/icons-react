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
		"content": `<style>.fhw73dukv {
  fill: currentColor;
  d: path("M4 20v-3h4v3zm0-4v-4h4v4zm0-5V4h4v7zm6 9v-7h4v7zm0-8V8h4v4zm0-5V4h4v3zm6 13v-2h4v2zm0-3v-4h4v4zm0-5V4h4v8z");
}
</style><path class="fhw73dukv"/>`,
		"fallback": "material-symbols:full-stacked-bar-chart",
	});
}

export default Component;
