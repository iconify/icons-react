import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mrjlwijfh {
  fill: currentColor;
  d: path("M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5V6h14zm0 4.1V7H3v7.5A2.5 2.5 0 0 0 5.5 17h4.1A5.5 5.5 0 0 1 17 9.6M14.5 19a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m-.5-6.5a.5.5 0 0 1 1 0V14h1a.5.5 0 0 1 0 1h-1.5a.5.5 0 0 1-.5-.5z");
}
</style><path class="mrjlwijfh"/>`,
		"fallback": "fluent:calendar-clock-20-filled",
	});
}

export default Component;
