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
		"content": `<style>.qorb1qstg {
  fill: currentColor;
  d: path("M4.616 21q-.672 0-1.144-.472T3 19.385V5.615q0-.67.472-1.143Q3.944 4 4.616 4H6V2.846q0-.367.24-.607Q6.478 2 6.845 2h2.308q.367 0 .607.24q.239.239.239.606V4h1.385q.67 0 1.143.472q.472.472.472 1.144V6h6.385q.67 0 1.143.472q.472.472.472 1.144v9.769q0 .67-.472 1.143q-.472.472-1.143.472H12.96v.385q0 .67-.462 1.143q-.463.472-1.114.472zm6.116-11.499q.23-.23.23-.54q0-.309-.23-.539t-.54-.23t-.539.23t-.23.54t.23.539t.54.23t.539-.23m3.923 0q.23-.23.23-.54q0-.309-.23-.539t-.54-.23t-.539.23t-.23.54t.23.539t.54.23q.309 0 .539-.23m3.923 0q.23-.23.23-.54q0-.309-.23-.539t-.54-.23t-.539.23t-.23.54t.23.539t.54.23q.309 0 .539-.23m-7.846 7.077q.23-.23.23-.54t-.23-.539t-.54-.23t-.539.23t-.23.54t.23.539t.54.23t.539-.23m3.923 0q.23-.23.23-.54t-.23-.539t-.54-.23t-.539.23t-.23.54t.23.539t.54.23t.539-.23m3.923 0q.23-.23.23-.54t-.23-.539t-.54-.23t-.539.23t-.23.54t.23.539t.54.23t.539-.23");
}
</style><path class="qorb1qstg"/>`,
		"fallback": "material-symbols-light:camera-roll-rounded",
	});
}

export default Component;
