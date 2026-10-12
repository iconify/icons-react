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
		"content": `<style>.fjkqtjbyo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.53 18.72L13.97 8.28l.53-.53l.53.53l.94.94l.53.53l-.53.53L5.53 20.72l-.53.53l-.53-.53l-.94-.94l-.53-.53zM6.25 16L8 17.75m5.74-13.34l1.52-1.07l.49-.34H19l.47.37l1.31 1.01l.47.37l-.47.37l-1.31 1.01l-.47.37h-3.25l-.49-.34l-1.52-1.07l-.49-.34z");
}
</style><path class="fjkqtjbyo"/>`,
		"fallback": "iconoven:gilli-danda-sharp",
	});
}

export default Component;
