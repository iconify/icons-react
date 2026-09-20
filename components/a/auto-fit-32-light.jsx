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
		"content": `<style>.i-fb-7spj {
  fill: currentColor;
  d: path("M6 4.5a.5.5 0 0 1 .5-.5h19a.5.5 0 0 1 0 1h-19a.5.5 0 0 1-.5-.5m0 23a.5.5 0 0 1 .5-.5h19a.5.5 0 0 1 0 1h-19a.5.5 0 0 1-.5-.5M16.854 7.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 .708.708L16 8.707v14.586l-3.646-3.647a.5.5 0 0 0-.708.708l4.5 4.5a.5.5 0 0 0 .708 0l4.5-4.5a.5.5 0 0 0-.708-.708L17 23.293V8.707l3.146 3.147a.5.5 0 0 0 .708-.708z");
}
</style><path class="i-fb-7spj"/>`,
		"fallback": "fluent:auto-fit-32-light",
	});
}

export default Component;
