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
		"content": `<style>.zrvic13sz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 5l19-2.5M12 3.75V7M6 7h12v13H6Zm0 6h12");
}
</style><path class="zrvic13sz"/>`,
		"fallback": "uix-sharp:gondola-cabin",
	});
}

export default Component;
