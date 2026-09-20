import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wjz01savx {
  fill: currentColor;
  d: path("M214 72a6 6 0 0 1-6 6h-32a6 6 0 0 1 0-12h32a6 6 0 0 1 6 6m-6 26h-32a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12m38-50v160a14 14 0 0 1-14 14h-80a14 14 0 0 1-14-14v-18H94v20h18a6 6 0 0 1 0 12H64a6 6 0 0 1 0-12h18v-20H32a22 22 0 0 1-22-22V96a22 22 0 0 1 22-22h106V48a14 14 0 0 1 14-14h80a14 14 0 0 1 14 14M138 178V86H32a10 10 0 0 0-10 10v72a10 10 0 0 0 10 10Zm96-130a2 2 0 0 0-2-2h-80a2 2 0 0 0-2 2v160a2 2 0 0 0 2 2h80a2 2 0 0 0 2-2Zm-42 122a10 10 0 1 0 10 10a10 10 0 0 0-10-10");
}
</style><path class="wjz01savx"/>`,
		"fallback": "ph:desktop-tower-light",
	});
}

export default Component;
