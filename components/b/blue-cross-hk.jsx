import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.c0gbbdc7z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 13H35V5.5H13V13H5.5v22H13v7.5h22V35h7.5z");
}
</style><path class="c0gbbdc7z"/>`,
		"fallback": "arcticons:blue-cross-hk",
	});
}

export default Component;
