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
		"content": `<style>.htwecyauh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 7l4.5 5L12 4l4.5 8L21 7l-2 10H5Zm2 13.5h14M12 13h.01");
}
</style><path class="htwecyauh"/>`,
		"fallback": "uix-sharp:champions",
	});
}

export default Component;
