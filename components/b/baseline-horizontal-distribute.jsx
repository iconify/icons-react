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
		"content": `<style>.pwd3o3boq {
  fill: currentColor;
  d: path("M4 22H2V2h2zM22 2h-2v20h2zm-8.5 5h-3v10h3z");
}
</style><path class="pwd3o3boq"/>`,
		"fallback": "ic:baseline-horizontal-distribute",
	});
}

export default Component;
