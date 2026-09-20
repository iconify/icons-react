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
		"content": `<style>.rbeyiib0y {
  fill: currentColor;
  d: path("M92 48V16a4 4 0 0 1 8 0v32a4 4 0 0 1-8 0m36 4a4 4 0 0 0 4-4V16a4 4 0 0 0-8 0v32a4 4 0 0 0 4 4m32 0a4 4 0 0 0 4-4V16a4 4 0 0 0-8 0v32a4 4 0 0 0 4 4m90.4 47.2L220 122v62a28 28 0 0 1-28 28H64a28 28 0 0 1-28-28v-62L5.6 99.2a4 4 0 0 1 4.8-6.4L36 112V80a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4v32l25.6-19.2a4 4 0 1 1 4.8 6.4M212 84H44v100a20 20 0 0 0 20 20h128a20 20 0 0 0 20-20Z");
}
</style><path class="rbeyiib0y"/>`,
		"fallback": "ph:cooking-pot-thin",
	});
}

export default Component;
