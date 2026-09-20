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
		"content": `<style>.rbmfzbbwk {
  fill: currentColor;
  d: path("M216 60h-36.17a52 52 0 0 0-103.66 0H40a20 20 0 0 0-20 20v120a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V80a20 20 0 0 0-20-20m-88-24a28 28 0 0 1 27.71 24h-55.42A28 28 0 0 1 128 36m84 160H44V84h32v12a12 12 0 0 0 24 0V84h56v12a12 12 0 0 0 24 0V84h32Z");
}
</style><path class="rbmfzbbwk"/>`,
		"fallback": "ph:bag-bold",
	});
}

export default Component;
