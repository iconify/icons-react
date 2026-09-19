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
		"content": `<style>.jnytizb3q {
  cx: 24.124px;
  cy: 24.179px;
  r: 1.651px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.l-2djqbrb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m37.72 8.94l-6.715 12.83L43.5 28.323m-39-8.453l12.688 6.47l-6.853 12.72");
}
</style><path class="l-2djqbrb"/><circle class="jnytizb3q"/>`,
		"fallback": "arcticons:crosshair-hero",
	});
}

export default Component;
