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
		"content": `<style>.fwuekqkoy {
  fill: currentColor;
  d: path("M8 12a4 4 0 1 1 8 0a4 4 0 0 1-8 0");
}
</style><path class="fwuekqkoy"/>`,
		"fallback": "fluent:circle-small-24-filled",
	});
}

export default Component;
