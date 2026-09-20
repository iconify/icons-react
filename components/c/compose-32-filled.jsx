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
		"content": `<style>.i_6xac0lj {
  fill: currentColor;
  d: path("M17.75 4a1.25 1.25 0 1 1 0 2.5h-10A2.25 2.25 0 0 0 5.5 8.75v15.5a2.25 2.25 0 0 0 2.25 2.25h15.5a2.25 2.25 0 0 0 2.25-2.25v-10a1.25 1.25 0 0 1 2.5 0v10A4.75 4.75 0 0 1 23.25 29H7.75A4.75 4.75 0 0 1 3 24.25V8.75A4.75 4.75 0 0 1 7.75 4zm9.116-.634a1.25 1.25 0 0 1 1.768 1.768L14.65 19.116L12 20l.884-2.651z");
}
</style><path class="i_6xac0lj"/>`,
		"fallback": "fluent:compose-32-filled",
	});
}

export default Component;
