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
		"content": `<style>.ipj56slkj {
  fill: currentColor;
  d: path("M8 19V5h8v14zm-3.385-2V7h1v10zm13.77 0V7h1v10z");
}
</style><path class="ipj56slkj"/>`,
		"fallback": "material-symbols-light:amp-stories-sharp",
	});
}

export default Component;
