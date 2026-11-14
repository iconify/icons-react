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
		"content": `<style>.cwi-shbne {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.772 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5q.331 0 .653.018M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm7.5 7.5h8m-5.25 0v-1.75h2.5v1.75m-4.25 0h6l-.75 7.5h-4.5Zm2.25 2.5v2.5m1.5-2.5v2.5");
}
</style><path class="cwi-shbne"/>`,
		"fallback": "uix-sharp:account-delete",
	});
}

export default Component;
