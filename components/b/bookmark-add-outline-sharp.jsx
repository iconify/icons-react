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
		"content": `<style>.f3on4cb0f {
  fill: currentColor;
  d: path("M12 16.917L6 19.5V4h7v1H7v12.95l5-2.15l5 2.15V11h1v8.5zM7 5h6zm10 4V7h-2V6h2V4h1v2h2v1h-2v2z");
}
</style><path class="f3on4cb0f"/>`,
		"fallback": "material-symbols-light:bookmark-add-outline-sharp",
	});
}

export default Component;
