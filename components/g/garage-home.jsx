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
		"content": `<style>.hrydsb2py {
  fill: currentColor;
  d: path("M4 21V9l8-6l8 6v12h-3V11H7v10zm5-2h6v-2H9zm0-4h6v-2H9z");
}
</style><path class="hrydsb2py"/>`,
		"fallback": "material-symbols:garage-home",
	});
}

export default Component;
