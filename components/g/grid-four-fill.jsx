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
		"content": `<style>.hv_n43b9d {
  fill: currentColor;
  d: path("M216 56v60a4 4 0 0 1-4 4h-76V44a4 4 0 0 1 4-4h60a16 16 0 0 1 16 16M116 40H56a16 16 0 0 0-16 16v60a4 4 0 0 0 4 4h76V44a4 4 0 0 0-4-4m96 96h-76v76a4 4 0 0 0 4 4h60a16 16 0 0 0 16-16v-60a4 4 0 0 0-4-4m-172 4v60a16 16 0 0 0 16 16h60a4 4 0 0 0 4-4v-76H44a4 4 0 0 0-4 4");
}
</style><path class="hv_n43b9d"/>`,
		"fallback": "ph:grid-four-fill",
	});
}

export default Component;
