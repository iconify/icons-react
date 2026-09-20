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
		"content": `<style>.wjfa1pb5x {
  fill: currentColor;
  d: path("M2.866 19v-6.577h1.692V19zm5.519 0v-8.884h1.692V19zm5.519 0V7.789h1.692V19zm5.519-7.46V5h1.693v6.389q-.125-.012-.244-.018t-.256-.006q-.313 0-.619.047q-.306.046-.574.128m.672 7.25q-.21-.21-.21-.52t.21-.521t.52-.21t.52.21t.211.52t-.21.52q-.21.211-.52.211t-.52-.21m.02-2.251v-3.616h1v3.616z");
}
</style><path class="wjfa1pb5x"/>`,
		"fallback": "material-symbols-light:android-cell-4-bar-alert",
	});
}

export default Component;
