import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.actk2hqkm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 12.13v23.74c-2.459-.636-4.875-1.272-9.75-1.272c-8.478 0-11.022 2.543-19.5 2.543c-4.875 0-7.334-.636-9.75-1.271V12.13c2.416.636 4.875 1.272 9.75 1.272c8.478 0 11.022-2.543 19.5-2.543c4.875 0 7.291.636 9.75 1.271");
}

.tsvo8l-uc {
  cx: 24px;
  cy: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 7.49px;
  ry: 6.28px;
}
</style><ellipse transform="rotate(-47.52 24 24)" class="tsvo8l-uc"/><path class="actk2hqkm"/>`,
		"fallback": "arcticons:emoji-flag-japan",
	});
}

export default Component;
