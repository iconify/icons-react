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
		"content": `<style>.fe_3ghbmf {
  fill: currentColor;
  d: path("M9 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H10v1a5 5 0 0 1 5 5v1h1a2 2 0 0 1 2 2v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-4a2 2 0 0 1 2-2h1v-1a5 5 0 0 1 4-4.9zm7 9.5h-1.5a.5.5 0 0 1-.5-.5V10a4 4 0 0 0-8 0v1.5a.5.5 0 0 1-.5.5H4a1 1 0 0 0-1 1v4h5v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2h5v-4a1 1 0 0 0-1-1M6 13.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0zm9 0a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0zM8.5 9a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5m3.5.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0zM9 17h2v-2H9z");
}
</style><path class="fe_3ghbmf"/>`,
		"fallback": "fluent:building-government-20-regular",
	});
}

export default Component;
