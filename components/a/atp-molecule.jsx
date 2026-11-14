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
		"content": `<style>.an1m7sbhr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.059 12.756l-.875 1.5A1.5 1.5 0 0 1 6.888 15H5.112a1.5 1.5 0 0 1-1.296-.744l-.875-1.5a1.5 1.5 0 0 1 0-1.512l.875-1.5A1.5 1.5 0 0 1 5.112 9h1.776a1.5 1.5 0 0 1 1.296.744l.875 1.5a1.5 1.5 0 0 1 0 1.512M9.5 12h1a1.5 1.5 0 1 1 3 0a1.5 1.5 0 1 1-3 0m3 0h1a1.5 1.5 0 1 1 3 0a1.5 1.5 0 1 1-3 0m3 0h1a1.5 1.5 0 1 1 3 0a1.5 1.5 0 1 1-3 0");
}
</style><path class="an1m7sbhr"/>`,
		"fallback": "uix:atp-molecule",
	});
}

export default Component;
