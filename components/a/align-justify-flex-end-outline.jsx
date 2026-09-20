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
		"content": `<style>.gooeucbxo {
  fill: currentColor;
  d: path("M20 22V2h2v20zm-6-5V7h3v10zm-6 0V7h3v10z");
}
</style><path class="gooeucbxo"/>`,
		"fallback": "material-symbols:align-justify-flex-end-outline",
	});
}

export default Component;
