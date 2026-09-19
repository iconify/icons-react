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
		"content": `<style>.wwflqn3gw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 38.5h37L24 9.5zm17.344-16.313h-6.938m10.406 5.438H12.436m17.345 5.437H8.969");
}
</style><path class="wwflqn3gw"/>`,
		"fallback": "arcticons:idemitsu-drive-on",
	});
}

export default Component;
