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
		"content": `<style>.koymt7bfv {
  fill: currentColor;
  d: path("M3 16V8h18v8zm1-1h16V9H4zm0 0V9z");
}
</style><path class="koymt7bfv"/>`,
		"fallback": "material-symbols-light:crop-21-9-outline-sharp",
	});
}

export default Component;
