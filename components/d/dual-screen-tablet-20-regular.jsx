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
		"content": `<style>.jo_g8mbzh {
  fill: currentColor;
  d: path("M4 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-3v-1h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v1H4zm9 6h.5a.5.5 0 0 0 0-1H13zM2 9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.5V8zm6 8a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H7.5v8zm-1-2a.5.5 0 0 0 0 1h.5a.5.5 0 0 0 0-1zm-5 .5a.5.5 0 0 1 .5-.5H5a.5.5 0 0 1 0 1h-.5a.5.5 0 0 1-.5-.5");
}
</style><path class="jo_g8mbzh"/>`,
		"fallback": "fluent:dual-screen-tablet-20-regular",
	});
}

export default Component;
