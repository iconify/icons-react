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
		"content": `<style>.iaayklbrb {
  fill: currentColor;
  d: path("M5.998 3a2 2 0 0 0-1.732 1h9.732a3 3 0 0 1 3 3v6.5a.5.5 0 1 0 1 0V7a4 4 0 0 0-4-4zM4 5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V9h6v6.5a.5.5 0 0 0 1 0V7a2 2 0 0 0-2-2zM3 9h5v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm0-1V7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1zm1.5 2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z");
}
</style><path class="iaayklbrb"/>`,
		"fallback": "fluent:desk-multiple-20-regular",
	});
}

export default Component;
