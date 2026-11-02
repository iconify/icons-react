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
		"content": `<style>.mvk0bla4o {
  fill: currentColor;
  d: path("M14.707 11.293a1 1 0 0 1 0 1.414l-4 4A1 1 0 0 1 9 16V8a1.002 1.002 0 0 1 1.707-.707Z");
}
</style><path class="mvk0bla4o"/>`,
		"fallback": "coolicons:caret-right-fill-sharp",
	});
}

export default Component;
