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
		"content": `<style>.j2k4ipbcy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21 37.67a13.994 13.994 0 0 1 0-27.34V2.733a21.474 21.474 0 0 0 0 42.534Zm6-34.937v7.597a13.994 13.994 0 0 1 0 27.34v7.597a21.474 21.474 0 0 0 0-42.534");
}
</style><path class="j2k4ipbcy"/>`,
		"fallback": "arcticons:ausweisapp",
	});
}

export default Component;
