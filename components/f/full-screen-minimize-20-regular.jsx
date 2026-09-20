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
		"content": `<style>.qhclzixot {
  fill: currentColor;
  d: path("M14 5a1 1 0 0 0 1 1h2a.5.5 0 0 1 0 1h-2a2 2 0 0 1-2-2V3a.5.5 0 0 1 1 0zM6 15a1 1 0 0 0-1-1H3a.5.5 0 0 1 0-1h2a2 2 0 0 1 2 2v2a.5.5 0 0 1-1 0zm8 0a1 1 0 0 1 1-1h2a.5.5 0 0 0 0-1h-2a2 2 0 0 0-2 2v2a.5.5 0 0 0 1 0zM5 6a1 1 0 0 0 1-1V3a.5.5 0 0 1 1 0v2a2 2 0 0 1-2 2H3a.5.5 0 0 1 0-1z");
}
</style><path class="qhclzixot"/>`,
		"fallback": "fluent:full-screen-minimize-20-regular",
	});
}

export default Component;
