import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dtn5_vbur {
  fill: currentColor;
  d: path("M4 5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 1 1 0 1h-3a.5.5 0 0 1-.5-.5M4.5 7a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zM1 6a5 5 0 1 1 2.59 4.382l-1.944.592a.5.5 0 0 1-.624-.624l.592-1.947A5 5 0 0 1 1 6m5-4a4 4 0 0 0-3.417 6.08a.5.5 0 0 1 .051.406l-.383 1.259l1.257-.383a.5.5 0 0 1 .407.052A4 4 0 1 0 6 2");
}
</style><path class="dtn5_vbur"/>`,
		"fallback": "fluent:chat-12-regular",
	});
}

export default Component;
