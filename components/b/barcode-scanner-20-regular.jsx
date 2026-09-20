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
		"content": `<style>.dz05n--_n {
  fill: currentColor;
  d: path("M2 5.5A2.5 2.5 0 0 1 4.5 3h1a.5.5 0 0 1 0 1h-1A1.5 1.5 0 0 0 3 5.5v1a.5.5 0 0 1-1 0zm12-2a.5.5 0 0 1 .5-.5h1A2.5 2.5 0 0 1 18 5.5v1a.5.5 0 0 1-1 0v-1A1.5 1.5 0 0 0 15.5 4h-1a.5.5 0 0 1-.5-.5M2.5 13a.5.5 0 0 1 .5.5v1A1.5 1.5 0 0 0 4.5 16h1a.5.5 0 0 1 0 1h-1A2.5 2.5 0 0 1 2 14.5v-1a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v1a2.5 2.5 0 0 1-2.5 2.5h-1a.5.5 0 0 1 0-1h1a1.5 1.5 0 0 0 1.5-1.5v-1a.5.5 0 0 1 .5-.5m-12-7a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m3.5.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0zm2.5-.5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m3.5.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0z");
}
</style><path class="dz05n--_n"/>`,
		"fallback": "fluent:barcode-scanner-20-regular",
	});
}

export default Component;
