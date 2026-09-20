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
		"content": `<style>.zzdh3tbjx {
  fill: currentColor;
  d: path("M4 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V8h7v7.5a.5.5 0 0 0 1 0V6a2 2 0 0 0-2-2zM3 8h6v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm0-1V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1zm2 2.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z");
}
</style><path class="zzdh3tbjx"/>`,
		"fallback": "fluent:desk-20-regular",
	});
}

export default Component;
