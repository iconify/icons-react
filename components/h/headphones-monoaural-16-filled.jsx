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
		"content": `<style>.zbo7ibc_w {
  fill: currentColor;
  d: path("M8 1a7 7 0 0 1 7 7v4.5a2.5 2.5 0 0 1-2.5 2.5h-2a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5H14V8A6 6 0 0 0 2.173 6.58a.54.54 0 0 1-.515.42a.475.475 0 0 1-.477-.574A7 7 0 0 1 8 1");
}
</style><path class="zbo7ibc_w"/>`,
		"fallback": "fluent:headphones-monoaural-16-filled",
	});
}

export default Component;
