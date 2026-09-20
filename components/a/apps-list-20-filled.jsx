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
		"content": `<style>.hq4r7sm2z {
  fill: currentColor;
  d: path("M8 4.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-6-1A1.5 1.5 0 0 1 3.5 14h1A1.5 1.5 0 0 1 6 15.5v1A1.5 1.5 0 0 1 4.5 18h-1A1.5 1.5 0 0 1 2 16.5zm0-6A1.5 1.5 0 0 1 3.5 8h1A1.5 1.5 0 0 1 6 9.5v1A1.5 1.5 0 0 1 4.5 12h-1A1.5 1.5 0 0 1 2 10.5zm0-6A1.5 1.5 0 0 1 3.5 2h1A1.5 1.5 0 0 1 6 3.5v1A1.5 1.5 0 0 1 4.5 6h-1A1.5 1.5 0 0 1 2 4.5z");
}
</style><path class="hq4r7sm2z"/>`,
		"fallback": "fluent:apps-list-20-filled",
	});
}

export default Component;
