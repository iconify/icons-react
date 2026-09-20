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
		"content": `<style>.ewj5l-btq {
  fill: currentColor;
  d: path("M8 5v11h4V5a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1M7 9V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1h2a2 2 0 0 1 2 2v8.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V11a2 2 0 0 1 2-2zm0 7v-6H5a1 1 0 0 0-1 1v5zm6 0h3V8a1 1 0 0 0-1-1h-2z");
}
</style><path class="ewj5l-btq"/>`,
		"fallback": "fluent:data-histogram-20-regular",
	});
}

export default Component;
