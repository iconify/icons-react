import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.t4osmli6e {
  fill: currentColor;
  d: path("M7.5 2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5M3.61 3.61a.5.5 0 0 1 .708 0l1.414 1.415a.5.5 0 1 1-.707.707L3.611 4.318a.5.5 0 0 1 0-.707m7.78 0a.5.5 0 0 1 0 .708L9.974 5.732a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0M2 7.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m5.5.532v9.26a.5.5 0 0 0 .854.354l2.56-2.56a2 2 0 0 1 1.414-.586h3.232a.5.5 0 0 0 .31-.892L8.31 7.639a.5.5 0 0 0-.81.393");
}
</style><path class="t4osmli6e"/>`,
		"fallback": "fluent:cursor-click-20-filled",
	});
}

export default Component;
