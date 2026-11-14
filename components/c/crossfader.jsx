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
		"content": `<style>.un5bo0bjw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 7h9v10h-9Zm-5 5h5m9 0h5M12 9.75v4.5M2.5 9.5v5m19-5v5");
}
</style><path class="un5bo0bjw"/>`,
		"fallback": "uix-sharp:crossfader",
	});
}

export default Component;
