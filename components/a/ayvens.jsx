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
		"content": `<style>.nif4mac9s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.566 9.467c0 16.053-13.013 29.066-29.066 29.066L26.35 9.467zm1.972 0H43.5v29.066H30.735c4.922-9.998 4.803-29.066 4.803-29.066");
}
</style><path class="nif4mac9s"/>`,
		"fallback": "arcticons:ayvens",
	});
}

export default Component;
