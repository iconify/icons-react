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
		"content": `<style>.nsqlqybnh {
  fill: currentColor;
  d: path("M6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm1.5 4h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M7 13.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m.5-4h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1");
}
</style><path class="nsqlqybnh"/>`,
		"fallback": "fluent:document-one-page-20-filled",
	});
}

export default Component;
