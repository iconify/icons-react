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
		"content": `<style>.h5yu5_onj {
  fill: currentColor;
  d: path("M6 3.5a.5.5 0 0 0-1 0v12a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 0-1H6.707l9.07-9.07a6.571 6.571 0 0 1 9.294 9.292L12.145 28.147a.5.5 0 0 0 .708.707L25.778 15.93A7.571 7.571 0 0 0 15.07 5.222L6 14.292z");
}
</style><path class="h5yu5_onj"/>`,
		"fallback": "fluent:arrow-undo-32-light",
	});
}

export default Component;
