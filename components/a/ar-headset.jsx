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
		"content": `<style>.efeyanv0z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10.5h19v4a3 3 0 0 1-3 3h-4L12 15l-2.5 2.5h-4a3 3 0 0 1-3-3Zm2.5 0C5 4 19 4 19 10.5");
}
</style><path class="efeyanv0z"/>`,
		"fallback": "uix:ar-headset",
	});
}

export default Component;
