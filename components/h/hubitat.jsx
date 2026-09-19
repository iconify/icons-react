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
		"content": `<style>.r06wrm69z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.35 11.3a21.5 21.5 0 1 1-25.854-7.048");
}

.y9lzjg_4l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13 18.874L24 9.85l10.875 9.023V32.56H15.938");
}
</style><path class="r06wrm69z"/><path class="y9lzjg_4l"/>`,
		"fallback": "arcticons:hubitat",
	});
}

export default Component;
