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
		"content": `<style>.pobu7wbzw {
  fill: currentColor;
  d: path("M4 21V9l8-6l8 6v12h-2V10l-6-4.5L6 10v11zm5-2h6v-2H9zm0-4h6v-2H9zm-2 6V11h10v10z");
}
</style><path class="pobu7wbzw"/>`,
		"fallback": "material-symbols:garage-home-outline-sharp",
	});
}

export default Component;
