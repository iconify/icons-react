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
		"content": `<style>.thfarib8p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 20.257c0-5.509-8.73-9.975-19.5-9.975S4.5 14.748 4.5 20.257zm-39 7.486c0 5.509 8.73 9.975 19.5 9.975s19.5-4.466 19.5-9.975z");
}
</style><path class="thfarib8p"/>`,
		"fallback": "arcticons:hamburger",
	});
}

export default Component;
