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
		"content": `<style>.d21slxb1q {
  fill: currentColor;
  d: path("M6.5 17V3h14v14zm-3 3V6.616h1V19h12.385v1zm4-14h12V4h-12z");
}
</style><path class="d21slxb1q"/>`,
		"fallback": "material-symbols-light:ad-group-sharp",
	});
}

export default Component;
