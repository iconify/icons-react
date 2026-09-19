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
		"content": `<style>.fbhd2_bau {
  fill: currentColor;
  d: path("M9 5v2h6.59L4 18.59L5.41 20L17 8.41V15h2V5z");
}
</style><path class="fbhd2_bau"/>`,
		"fallback": "ic:baseline-north-east",
	});
}

export default Component;
