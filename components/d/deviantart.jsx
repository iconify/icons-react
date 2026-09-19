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
		"content": `<style>.f3ebbznjk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m19.363 43.5l4.071-7.768l12.64-.021v-9.754l-7.524-.009l7.524-14.347V4.5h-7.439l-4.071 7.793l-12.638.015v9.735l7.53-.003l-7.53 14.378V43.5z");
}
</style><path class="f3ebbznjk"/>`,
		"fallback": "arcticons:deviantart",
	});
}

export default Component;
