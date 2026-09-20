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
		"content": `<style>.ahj0ddcdp {
  fill: currentColor;
  d: path("M6 13.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m6.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zM4 4h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m5.5 1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.5zm1 10H16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-5.5z");
}
</style><path class="ahj0ddcdp"/>`,
		"fallback": "fluent:dual-screen-20-regular",
	});
}

export default Component;
