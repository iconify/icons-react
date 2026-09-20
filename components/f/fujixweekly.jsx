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
		"content": `<style>.eow3l48_w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 16.426v-6.011H27.284v6.011h1.567L24 20.036l-4.851-3.61h1.567v-6.011H5.5v6.011h4.305l8.788 7.634l-10.098 7.514H5.5v6.011h15.216v-6.011H19.09L24 27.309l4.91 4.265h-1.626v6.011H42.5v-6.011h-2.995L29.407 24.06l8.788-7.634z");
}
</style><path class="eow3l48_w"/>`,
		"fallback": "arcticons:fujixweekly",
	});
}

export default Component;
