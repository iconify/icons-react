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
		"content": `<style>.pe166-t2l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 15.5a2.06 2.06 0 0 1-3.7-1.35a2.06 2.06 0 0 1-1.96-3.4a2.06 2.06 0 0 1 .68-3.87a2.06 2.06 0 0 1 3.01-2.53a2.06 2.06 0 0 1 3.94 0a2.06 2.06 0 0 1 3.01 2.52a2.06 2.06 0 0 1 .68 3.88a2.06 2.06 0 0 1-1.96 3.4A2.06 2.06 0 0 1 12 15.5Zm0-5.75v5.5m0-5.5L7.24 7M12 9.75L16.76 7M12 16.75v2.625l2.25 1.875");
}
</style><path class="pe166-t2l"/>`,
		"fallback": "iconoven:cotton-plant-sharp",
	});
}

export default Component;
