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
		"content": `<style>.fz-_embbz {
  fill: currentColor;
  d: path("M2 22V2h2v20zm4-5v-3h10v3zm0-7V7h16v3z");
}
</style><path class="fz-_embbz"/>`,
		"fallback": "material-symbols:align-horizontal-left-outline",
	});
}

export default Component;
