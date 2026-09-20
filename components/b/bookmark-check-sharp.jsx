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
		"content": `<style>.xpa8r9-vw {
  fill: currentColor;
  d: path("m10.95 14l4.95-4.95l-1.425-1.4l-3.525 3.525L9.525 9.75L8.1 11.175zM5 21V3h14v18l-7-3z");
}
</style><path class="xpa8r9-vw"/>`,
		"fallback": "material-symbols:bookmark-check-sharp",
	});
}

export default Component;
