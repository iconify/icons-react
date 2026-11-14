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
		"content": `<style>.zooxpqepw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 4.5V7m-8.5 6L12 7l8.5 6Zm3 0v7h11v-7m-14 7h17");
}
</style><path class="zooxpqepw"/>`,
		"fallback": "uix-sharp:bird-feeder",
	});
}

export default Component;
