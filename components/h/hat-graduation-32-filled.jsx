import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.kq1d40jfq {
  fill: currentColor;
  d: path("M18.386 4.685a4.5 4.5 0 0 0-4.772 0L2.518 11.623A1 1 0 0 0 2 12.5V21a1 1 0 1 0 2 0v-6.693l9.614 6.012a4.5 4.5 0 0 0 4.772 0l11.144-6.97a1 1 0 0 0 0-1.695zm.795 16.906L25 17.95v5.599a1 1 0 0 1-.273.686A11.97 11.97 0 0 1 16 28c-3.438 0-6.54-1.448-8.727-3.764A1 1 0 0 1 7 23.55v-5.598l5.819 3.638a6 6 0 0 0 6.362 0");
}
</style><path class="kq1d40jfq"/>`,
		"fallback": "fluent:hat-graduation-32-filled",
	});
}

export default Component;
