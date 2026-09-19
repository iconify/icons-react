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
		"content": `<style>.n5mosbb-y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 10.467v27.01l4.116 2.873l6.296-4.034l.003-25.145L8.7 7.651Zm39 0v27.01l-4.116 2.873l-6.296-4.034l-.003-25.145l6.215-3.52Zm-13.317 2.301v14.575L24 30.846l-6.184-3.503V12.768L24 16.27Z");
}
</style><path class="n5mosbb-y"/>`,
		"fallback": "arcticons:call-of-duty",
	});
}

export default Component;
