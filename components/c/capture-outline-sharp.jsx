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
		"content": `<style>.cbuxcbczx {
  fill: currentColor;
  d: path("M6.192 15.808h11.616V8.192H6.192zM3 19V5h18v14zm1-1h16V6H4zm0 0V6z");
}
</style><path class="cbuxcbczx"/>`,
		"fallback": "material-symbols-light:capture-outline-sharp",
	});
}

export default Component;
