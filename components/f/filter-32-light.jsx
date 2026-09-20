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
		"content": `<style>.e8ow0mb1l {
  fill: currentColor;
  d: path("M3 8.5a.5.5 0 0 1 .5-.5h25a.5.5 0 0 1 0 1h-25a.5.5 0 0 1-.5-.5m4 7a.5.5 0 0 1 .5-.5h17a.5.5 0 0 1 0 1h-17a.5.5 0 0 1-.5-.5m4.5 6.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z");
}
</style><path class="e8ow0mb1l"/>`,
		"fallback": "fluent:filter-32-light",
	});
}

export default Component;
