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
		"content": `<style>.c28wasb5u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 29.935c-2.459-.636-4.875-1.272-9.75-1.272c-8.478 0-11.022 2.544-19.5 2.544c-4.875 0-7.334-.636-9.75-1.272m39-11.87c-2.459-.636-4.875-1.272-9.75-1.272c-8.478 0-11.022 2.544-19.5 2.544c-4.875 0-7.334-.636-9.75-1.272M43.5 24c-2.459-.636-4.875-1.272-9.75-1.272c-8.478 0-11.022 2.544-19.5 2.544c-4.875 0-7.334-.636-9.75-1.272");
}

.weruj009g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 35.87c2.416.636 4.875 1.271 9.75 1.271c8.478 0 11.022-2.543 19.5-2.543c4.875 0 7.291.636 9.75 1.272V12.13c-2.459-.635-4.875-1.271-9.75-1.271c-8.478 0-11.022 2.543-19.5 2.543c-4.875 0-7.334-.636-9.75-1.271z");
}
</style><path class="weruj009g"/><path class="c28wasb5u"/>`,
		"fallback": "arcticons:emoji-flag-4-waves",
	});
}

export default Component;
