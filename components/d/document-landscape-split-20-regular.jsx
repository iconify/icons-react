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
		"content": `<style>.c0_p6m8by {
  fill: currentColor;
  d: path("M16 16a2 2 0 0 0 2-2V9.414a1.5 1.5 0 0 0-.44-1.06l-3.914-3.915A1.5 1.5 0 0 0 12.586 4H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2zm1-2a1 1 0 0 1-1 1h-6V5h2v3.5a1.5 1.5 0 0 0 1.5 1.5H17zM9 5v10H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm4 3.5V5.207L16.793 9H13.5a.5.5 0 0 1-.5-.5");
}
</style><path class="c0_p6m8by"/>`,
		"fallback": "fluent:document-landscape-split-20-regular",
	});
}

export default Component;
