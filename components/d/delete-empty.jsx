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
		"content": `<style>.bgbq9gzck {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.319 6.5h7.362a2.625 2.625 0 0 1 2.618 2.812l-.625 8.75a2.625 2.625 0 0 1-2.618 2.438H8.944a2.625 2.625 0 0 1-2.618-2.438l-.625-8.75A2.625 2.625 0 0 1 8.319 6.5M3.5 6.5h17M9 6.5v-2c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v2");
}
</style><path class="bgbq9gzck"/>`,
		"fallback": "uix:delete-empty",
	});
}

export default Component;
