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
		"content": `<style>.oilaccbua {
  fill: currentColor;
  d: path("M4 16V8h16v8z");
}
</style><path class="oilaccbua"/>`,
		"fallback": "material-symbols-light:crop-16-9-sharp",
	});
}

export default Component;
