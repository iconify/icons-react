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
		"content": `<style>.lagw7xbgz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 5c2 0 3.5 1.5 3.5 3.5c0 3.5-2.25 6.25-5.75 7.5l-.5-1q2.625-1.5 3-3C10 12 8.5 10.5 8.5 8.5S10 5 12 5ZM3.5 19.5h17");
}
</style><path class="lagw7xbgz"/>`,
		"fallback": "uix-sharp:breath-mark",
	});
}

export default Component;
