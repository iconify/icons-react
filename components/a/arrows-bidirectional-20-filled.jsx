import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.osmwteloa {
  fill: currentColor;
  d: path("M6.678 5.033A.5.5 0 0 1 7 5.5V8h6V5.5a.5.5 0 0 1 .874-.332l4 4.5a.5.5 0 0 1 0 .664l-4 4.5A.5.5 0 0 1 13 14.5V12H7v2.5a.5.5 0 0 1-.874.332l-4-4.5a.5.5 0 0 1 0-.664l4-4.5a.5.5 0 0 1 .552-.135");
}
</style><path class="osmwteloa"/>`,
		"fallback": "fluent:arrows-bidirectional-20-filled",
	});
}

export default Component;
