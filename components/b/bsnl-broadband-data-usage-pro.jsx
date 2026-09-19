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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.dgb0hsu8a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.715 13.416L27.047 29.411l-4.729-4.618v12.989h13.26l-4.465-4.374l13.858-14.147");
}

.mvcls1moz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m3.307 29.834l14.398-14.7l-4.668-4.572h12.95v12.684l-4.41-4.318L5.645 35.194");
}
</style><circle class="cpk0fnbgt"/><path class="mvcls1moz"/><path class="dgb0hsu8a"/>`,
		"fallback": "arcticons:bsnl-broadband-data-usage-pro",
	});
}

export default Component;
