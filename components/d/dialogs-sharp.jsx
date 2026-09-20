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
		"content": `<style>.jf49pknzu {
  fill: currentColor;
  d: path("M9 15h6V9H9zm-5 5V4h16v16z");
}
</style><path class="jf49pknzu"/>`,
		"fallback": "material-symbols-light:dialogs-sharp",
	});
}

export default Component;
