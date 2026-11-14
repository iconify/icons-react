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
		"content": `<style>.fiqpkybvu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2v2.5m-2 2a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm2 2v7m-2 2a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm2 2V22");
}
</style><path class="fiqpkybvu"/>`,
		"fallback": "uix-sharp:git-commits",
	});
}

export default Component;
