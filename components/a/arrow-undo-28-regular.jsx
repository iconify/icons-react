import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.apxh0zb0f {
  fill: currentColor;
  d: path("m7.558 10.5l5.34-5.352a5.625 5.625 0 0 1 7.954 7.954L9.22 24.72a.75.75 0 0 0 1.06 1.062l11.633-11.618A7.125 7.125 0 1 0 11.836 4.087L6.5 9.437V2.75a.75.75 0 0 0-1.5 0v8.5a.75.75 0 0 0 .75.75h8.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="apxh0zb0f"/>`,
		"fallback": "fluent:arrow-undo-28-regular",
	});
}

export default Component;
