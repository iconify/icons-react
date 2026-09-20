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
		"content": `<style>.gaokdcc3i {
  fill: currentColor;
  d: path("M2 4V2h20v2zm8.5 16V6h3v14z");
}
</style><path class="gaokdcc3i"/>`,
		"fallback": "material-symbols:align-flex-start",
	});
}

export default Component;
