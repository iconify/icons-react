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
		"content": `<style>.bugqr5-ko {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3v5M8.5 8h7L14 12.5h-4ZM8 15.5l-1.5 3m5.5-3v4m4-4l1.5 3");
}
</style><path class="bugqr5-ko"/>`,
		"fallback": "uix-sharp:fire-sprinkler",
	});
}

export default Component;
