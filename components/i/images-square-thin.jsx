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
		"content": `<style>.oega8_y0p {
  fill: currentColor;
  d: path("M208 36H80a12 12 0 0 0-12 12v20H48a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h128a12 12 0 0 0 12-12v-20h20a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12M76 48a4 4 0 0 1 4-4h128a4 4 0 0 1 4 4v79l-23.51-23.52a12 12 0 0 0-17 0L95 180H80a4 4 0 0 1-4-4Zm104 160a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h20v100a12 12 0 0 0 12 12h100Zm28-28H106.34l70.83-70.83a4 4 0 0 1 5.66 0L212 138.34V176a4 4 0 0 1-4 4m-88-72a20 20 0 1 0-20-20a20 20 0 0 0 20 20m0-32a12 12 0 1 1-12 12a12 12 0 0 1 12-12");
}
</style><path class="oega8_y0p"/>`,
		"fallback": "ph:images-square-thin",
	});
}

export default Component;
