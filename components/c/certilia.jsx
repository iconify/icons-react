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
		"content": `<style>.dd2tyqbmj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.383 24c0-11.787 12.557-19.5 21.705-19.5c2.395 0 4.974.57 7.529 1.458l-5.376 9.006c-6.1-.18-19.552-1.48-23.857 9.036Zm0 0c0 11.787 12.557 19.5 21.705 19.5c2.395 0 4.974-.57 7.529-1.458c0 0-15.421-3.938-19.906-18.042z");
}

.x15-jszue {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 14.985L18.711 24H9.383");
}
</style><path class="dd2tyqbmj"/><path class="x15-jszue"/>`,
		"fallback": "arcticons:certilia",
	});
}

export default Component;
