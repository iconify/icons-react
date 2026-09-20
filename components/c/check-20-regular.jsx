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
		"content": `<style>.gq5hwkb6p {
  fill: currentColor;
  d: path("M18 7.121V13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h11.879l-1 1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8.121zM4 8.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5H9a.5.5 0 0 1 0 1H4.5a.5.5 0 0 1-.5-.5m13.854-6.354a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708 0");
}
</style><path class="gq5hwkb6p"/>`,
		"fallback": "fluent:check-20-regular",
	});
}

export default Component;
