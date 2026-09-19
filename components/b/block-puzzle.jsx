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
		"content": `<style>.j329bhr8h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.167 5.5H17.833v12.333h12.334zm12.333 0H30.167v12.333H42.5zm-24.667 0H5.5v12.333h12.333zm12.334 12.333H17.833v12.334h12.334zm0 12.334H17.833V42.5h12.334z");
}
</style><path class="j329bhr8h"/>`,
		"fallback": "arcticons:block-puzzle",
	});
}

export default Component;
