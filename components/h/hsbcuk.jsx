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
		"content": `<style>.mqgo5-b6p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.75 13.75L24 24l10.25-10.25zm20.5 20.5L24 24L13.75 34.25zm0 0L44.5 24L34.25 13.75zm-20.5-20.5L3.5 24l10.25 10.25z");
}
</style><path class="mqgo5-b6p"/>`,
		"fallback": "arcticons:hsbcuk",
	});
}

export default Component;
