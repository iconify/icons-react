import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qipb5ritp {
  fill: currentColor;
  d: path("M56.88 31.93A12 12 0 0 0 36.8 44.28A20 20 0 0 0 20 64v160a19.82 19.82 0 0 0 11.56 18.1a20.1 20.1 0 0 0 8.49 1.9a19.9 19.9 0 0 0 12.82-4.72l.12-.11L84.47 212h103.68l11 12.07a12 12 0 0 0 17.76-16.15ZM80 188a11.93 11.93 0 0 0-7.84 2.92L44 215.23V68h13.24l109.09 120ZM236 64v110.12a12 12 0 0 1-24 0V68h-95.4a12 12 0 0 1 0-24H216a20 20 0 0 1 20 20");
}
</style><path class="qipb5ritp"/>`,
		"fallback": "ph:chat-slash-bold",
	});
}

export default Component;
