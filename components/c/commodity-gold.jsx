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
		"content": `<style>.chnu4qvpl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.295 18.456l.583-1.5A1.5 1.5 0 0 1 5.276 16h3.448a1.5 1.5 0 0 1 1.398.956l.583 1.5A1.5 1.5 0 0 1 9.307 20.5H4.693a1.5 1.5 0 0 1-1.398-2.044m10 0l.583-1.5A1.5 1.5 0 0 1 15.276 16h3.448a1.5 1.5 0 0 1 1.398.956l.583 1.5a1.5 1.5 0 0 1-1.398 2.044h-4.614a1.5 1.5 0 0 1-1.398-2.044m-5-7.25l.583-1.5a1.5 1.5 0 0 1 1.398-.956h3.448a1.5 1.5 0 0 1 1.398.956l.583 1.5a1.5 1.5 0 0 1-1.398 2.044H9.693a1.5 1.5 0 0 1-1.398-2.044M12 3v2.5m-5-1L8.5 6M17 4.5L15.5 6");
}
</style><path class="chnu4qvpl"/>`,
		"fallback": "uix:commodity-gold",
	});
}

export default Component;
