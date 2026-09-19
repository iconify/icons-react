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

.oxgolng2h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.64 22.096h6.72v6.605h4.186l-3.768 3.888L24 36.478l-3.773-3.889l-3.768-3.888h4.181Zm-4.349 16.393h15.418");
}

.was2pobky {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 19.385L20.036 7.186l-4.117 12.199m1.372-4.117h5.337m9.454 4.117L28.118 7.187l-4.117 12.198");
}
</style><path class="was2pobky"/><circle class="cpk0fnbgt"/><path class="oxgolng2h"/>`,
		"fallback": "arcticons:apkmirror",
	});
}

export default Component;
