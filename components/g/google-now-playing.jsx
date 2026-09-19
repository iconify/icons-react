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
		"content": `<style>.k79fnye9s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.693 15.74a3.904 3.904 0 0 0-7.808 0v13.385a3.904 3.904 0 0 0 7.808 0zm7.807 5.526a3.904 3.904 0 0 0-7.807 0V23.6a3.904 3.904 0 0 0 7.807 0zM22.982 6.312a3.904 3.904 0 0 0-3.904 3.904v10.492a10.7 10.7 0 0 0-2.885-.405C10.287 20.303 5.5 25.09 5.5 30.995s4.787 10.693 10.693 10.693s10.692-4.787 10.692-10.693v-20.78a3.904 3.904 0 0 0-3.903-3.903");
}
</style><path class="k79fnye9s"/>`,
		"fallback": "arcticons:google-now-playing",
	});
}

export default Component;
