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
		"content": `<style>.hbp-wob0w {
  fill: currentColor;
  d: path("M216 36H88a4 4 0 0 0-4 4v44H40a4 4 0 0 0-4 4v128a4 4 0 0 0 4 4h128a4 4 0 0 0 4-4v-44h44a4 4 0 0 0 4-4V40a4 4 0 0 0-4-4m-52 176H44V92h120Zm48-48h-40V88a4 4 0 0 0-4-4H92V44h120Z");
}
</style><path class="hbp-wob0w"/>`,
		"fallback": "ph:copy-thin",
	});
}

export default Component;
