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
		"content": `<style>.sttxeh1km {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 21H6C4.34315 21 3 19.6569 3 18V8C3 6.34315 4.34315 5 6 5H18C19.6569 5 21 6.34315 21 8V10M7 11H11M8 3V7M16 3V7M19.6667 17C19.6667 18.4728 18.4728 19.6667 17 19.6667C15.5272 19.6667 14.3333 18.4728 14.3333 17C14.3333 15.5272 15.5272 14.3333 17 14.3333C18.4728 14.3333 19.6667 15.5272 19.6667 17ZM20.5417 17H21M19.5043 19.5043L19.8284 19.8284M17 20.5417V21M14.4957 19.5043L14.1716 19.8284M13.4583 17H13M14.4957 14.4957L14.1716 14.1716M17 13.4583V13M19.5043 14.4957L19.8284 14.1716");
}
</style><path class="sttxeh1km"/>`,
		"fallback": "keyline-icons:calendar-cog-fill",
	});
}

export default Component;
