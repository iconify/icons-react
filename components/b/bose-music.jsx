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
		"content": `<style>.zolcpjblz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 7L24 21L5.5 7v34h37zM24 21l18.5 14M24 21l-9.25 7");
}
</style><path class="zolcpjblz"/>`,
		"fallback": "arcticons:bose-music",
	});
}

export default Component;
