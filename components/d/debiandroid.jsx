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
		"content": `<style>.ig8veptah {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.835 15.125a5.08 5.08 0 0 0-3.246-1.358c-3.467 0-6.533 3.666-6.533 6.8a7.603 7.603 0 0 0 7.933 7.733a9.74 9.74 0 0 0 9.733-9.933c0-6.334-2.496-13.867-12.733-13.867c-10.467 0-16.711 8.267-16.711 17.6c0 11.6 7.444 21.4 16.978 21.4");
}
</style><path class="ig8veptah"/>`,
		"fallback": "arcticons:debiandroid",
	});
}

export default Component;
