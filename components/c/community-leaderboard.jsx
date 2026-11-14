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
		"content": `<style>.htd6hwbvi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 20.5v-6h5v-3.25h7v2.25h5v7Zm8.941-16.232l.106.185a1.5 1.5 0 0 0 .993.722l.209.043a.508.508 0 0 1 .272.839l-.143.158a1.5 1.5 0 0 0-.379 1.167l.022.212a.508.508 0 0 1-.713.518l-.194-.087a1.5 1.5 0 0 0-1.228 0l-.194.087a.508.508 0 0 1-.713-.518l.022-.212a1.5 1.5 0 0 0-.379-1.167l-.143-.158a.508.508 0 0 1 .272-.839l.209-.043a1.5 1.5 0 0 0 .993-.722l.106-.185a.508.508 0 0 1 .882 0");
}
</style><path class="htd6hwbvi"/>`,
		"fallback": "uix:community-leaderboard",
	});
}

export default Component;
