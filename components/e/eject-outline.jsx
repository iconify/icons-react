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
		"content": `<style>.jpzgg8bby {
  fill: currentColor;
  d: path("M6.154 18.346v-.923h11.692v.923zm.158-3.692L12 6.154l5.689 8.5zm1.815-.923h7.746L12 7.946z");
}
</style><path class="jpzgg8bby"/>`,
		"fallback": "material-symbols-light:eject-outline",
	});
}

export default Component;
