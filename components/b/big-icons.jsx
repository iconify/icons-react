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
		"content": `<style>.aullvbbbe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.165 16.688v4.875H8.84v-4.875m12.99 0v4.875h-4.326v-4.875m21.657 0v4.875h-4.326v-4.875m-4.339 0v4.875h-4.327v-4.875");
}

.grsbnzbwy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 16.688h39v14.625h-39z");
}
</style><path class="grsbnzbwy"/><path class="aullvbbbe"/>`,
		"fallback": "arcticons:big-icons",
	});
}

export default Component;
