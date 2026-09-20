import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.b3284kbwv {
  fill: currentColor;
  d: path("M13 9a2 2 0 0 0 2 2h6v7.75A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75V5.25A2.25 2.25 0 0 1 5.25 3H13zm1.5-5.531q.115.087.22.19l5.62 5.621q.104.105.191.22H15a.5.5 0 0 1-.5-.5z");
}
</style><path class="b3284kbwv"/>`,
		"fallback": "fluent:document-square-24-filled",
	});
}

export default Component;
