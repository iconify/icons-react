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
		"content": `<style>.ch4v-keab {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.78 11.1L4.45 24l13.33 13.32L31.11 24Zm5.82 20.4l6.66 6.1L43.46 24l-13.2-12.9l-6.41 5.9");
}
</style><path class="ch4v-keab"/>`,
		"fallback": "arcticons:anydesk",
	});
}

export default Component;
