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
		"content": `<style>.jdcb8ubbp {
  fill: currentColor;
  d: path("M8 19V5h8v14zm-3.385-2V7h1v10zm13.77 0V7h1v10zM9 18h6V6H9zm0 0V6z");
}
</style><path class="jdcb8ubbp"/>`,
		"fallback": "material-symbols-light:amp-stories-outline-sharp",
	});
}

export default Component;
