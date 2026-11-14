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
		"content": `<style>.swix0sbfn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h18v4H3Zm2.5 4l-1 12.5A1.5 1.5 0 0 0 6 21h12a1.5 1.5 0 0 0 1.5-1.5L18.5 7m-10-4v4M12 3v4m3.5-4v4");
}
</style><path class="swix0sbfn"/>`,
		"fallback": "uix-sharp:heat-sealer",
	});
}

export default Component;
