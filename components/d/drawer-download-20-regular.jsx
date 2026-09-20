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
		"content": `<style>.bh85_fv5g {
  fill: currentColor;
  d: path("M9 5.5a4.5 4.5 0 0 1 4-4.473v3.766l-.646-.647a.5.5 0 0 0-.708.707l1.5 1.5a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0-.708-.707L14 4.793V1.027A4.5 4.5 0 1 1 9 5.5m2 2a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5m6 2.243a5.5 5.5 0 0 1-1 .657v.6h-3.5a.5.5 0 0 0-.5.5a2 2 0 1 1-4 0a.5.5 0 0 0-.5-.5H4V8h4.6a5.5 5.5 0 0 1-.393-1H4a2 2 0 0 1 2-2h2.022a5.5 5.5 0 0 1 .185-1H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3zM16 15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3h3.041a3 3 0 0 0 5.918 0H16z");
}
</style><path class="bh85_fv5g"/>`,
		"fallback": "fluent:drawer-download-20-regular",
	});
}

export default Component;
