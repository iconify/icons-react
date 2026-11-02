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
		"content": `<style>.n3cuyn52q {
  fill: currentColor;
  d: path("M4 18a1 1 0 0 0 1 1h16a1 1 0 0 1 0 2H5a3 3 0 0 1-3-3V4a1 1 0 0 1 2 0Zm2-4v-2c0-.265.105-.52.293-.707l2-2a2.414 2.414 0 0 1 3.414 0l1 1a.414.414 0 0 0 .586 0l4-4c.182-.182.398-.326.635-.424c.69-.286 1.561-.163 1.932.549c.093.18.141.379.14.582v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2Z");
}
</style><path class="n3cuyn52q"/>`,
		"fallback": "coolicons:chart-area-fill",
	});
}

export default Component;
