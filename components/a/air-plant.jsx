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
		"content": `<style>.gwxseqb_j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 20.5C9 17 5.5 14 2.5 13m9.5 7.5C9.5 15 7.5 9 6.5 4M12 20.5C14.5 15 16.5 9 17.5 4M12 20.5c3-3.5 6.5-6.5 9.5-7.5M12 20.5v-13");
}
</style><path class="gwxseqb_j"/>`,
		"fallback": "uix-sharp:air-plant",
	});
}

export default Component;
