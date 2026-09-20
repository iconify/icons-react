import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.p6uyl8brr {
  fill: currentColor;
  d: path("M4 17c.552 0 1 .44 1 .984v1.032A.99.99 0 0 1 4 20c-.552 0-1-.44-1-.984v-1.032A.99.99 0 0 1 4 17");
}
</style><path class="p6uyl8brr"/>`,
		"fallback": "fluent:cellular-data-5-24-filled",
	});
}

export default Component;
