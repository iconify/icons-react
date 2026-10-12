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
		"content": `<style>.adqmveiej {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 7.75H19.5l.18 1.24l1.39 9.52l.18 1.24H2.75l.18-1.24l1.39-9.52l.18-1.24zM7.5 12.5h9m-7 3.25h5");
}
</style><path class="adqmveiej"/>`,
		"fallback": "iconoven:desk-nameplate-sharp",
	});
}

export default Component;
