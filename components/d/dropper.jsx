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
		"content": `<style>.v4xa_4ska {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 11a8.5 8.5 0 0 1 17 0Zm0 0l6.25 5.5M20.5 11l-6.25 5.5M12 11v5.5m-2.5 0h5V21h-5Z");
}
</style><path class="v4xa_4ska"/>`,
		"fallback": "uix-sharp:dropper",
	});
}

export default Component;
