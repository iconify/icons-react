import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.t__k847-t {
  fill: currentColor;
  d: path("M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14M8 4.5V8h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0");
}
</style><path class="t__k847-t"/>`,
		"fallback": "fluent:clock-16-filled",
	});
}

export default Component;
