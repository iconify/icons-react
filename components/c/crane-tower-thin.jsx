import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.m_gm6ybnb {
  fill: currentColor;
  d: path("M240 84H106.47L83.58 38.21A4 4 0 0 0 80 36H48a4 4 0 0 0-4 4v44H24a4 4 0 0 0 0 8h20v120H24a4 4 0 0 0 0 8h104a4 4 0 0 0 0-8h-20V92h104v92a4 4 0 0 1-4 4h-16a4 4 0 0 1-4-4v-8a4 4 0 0 0-8 0v8a12 12 0 0 0 12 12h16a12 12 0 0 0 12-12V92h20a4 4 0 0 0 0-8M52 44h25.53l20 40H52Zm0 168v-56h48v56Zm48-64H52V92h48Z");
}
</style><path class="m_gm6ybnb"/>`,
		"fallback": "ph:crane-tower-thin",
	});
}

export default Component;
