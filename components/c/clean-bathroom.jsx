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
		"content": `<style>.zegm-3b9q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12h18v2.5a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 14.5Zm3.5 7l-.75 2m11.75-2l.75 2m-.22-17.03l.32.584a1.5 1.5 0 0 0 .596.596l.584.32a.604.604 0 0 1 0 1.06l-.584.32a1.5 1.5 0 0 0-.596.596l-.32.584a.604.604 0 0 1-1.06 0l-.32-.584a1.5 1.5 0 0 0-.596-.596l-.584-.32a.604.604 0 0 1 0-1.06l.584-.32a1.5 1.5 0 0 0 .596-.596l.32-.584a.604.604 0 0 1 1.06 0");
}
</style><path class="zegm-3b9q"/>`,
		"fallback": "uix:clean-bathroom",
	});
}

export default Component;
