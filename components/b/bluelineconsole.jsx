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
		"content": `<style>.kberpgbwh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m9.21 22.74l5.64 5.46l-5.64 5.46");
}

.mmx9xl-me {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 19.2h39v18h-39zm0 0v-8.4h16l6.9 8.4");
}
</style><path class="mmx9xl-me"/><path class="kberpgbwh"/>`,
		"fallback": "arcticons:bluelineconsole",
	});
}

export default Component;
