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
		"content": `<style>.ra499w26k {
  fill: currentColor;
  d: path("M9 5.5a4.5 4.5 0 0 1 4-4.473v3.766l-.646-.647a.5.5 0 0 0-.708.707l1.5 1.5a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0-.708-.707L14 4.793V1.027A4.5 4.5 0 1 1 9 5.5m2 2a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5M6 4h2.207a5.5 5.5 0 0 0-.185 1H6a2 2 0 0 0-2 2h4.207q.149.524.393 1H4v3h3.5a.5.5 0 0 1 .5.5a2 2 0 1 0 4 0a.5.5 0 0 1 .5-.5H16v-.6a5.5 5.5 0 0 0 1-.657V15a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3");
}
</style><path class="ra499w26k"/>`,
		"fallback": "fluent:drawer-arrow-download-20-filled",
	});
}

export default Component;
