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
		"content": `<style>.rhj2-jbsm {
  fill: currentColor;
  d: path("m9 19l1.41-1.41L5.83 13H22v-2H5.83l4.59-4.59L9 5l-7 7z");
}
</style><path class="rhj2-jbsm"/>`,
		"fallback": "ic:baseline-west",
	});
}

export default Component;
