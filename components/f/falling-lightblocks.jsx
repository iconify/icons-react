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
		"content": `<style>.jtywnqb0c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11 4.5h13v13H11zm0 13h13v13H11zm0 13h13v13H11zm13 0h13v13H24z");
}
</style><path class="jtywnqb0c"/>`,
		"fallback": "arcticons:falling-lightblocks",
	});
}

export default Component;
