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
		"content": `<style>.fg2qc_sal {
  fill: currentColor;
  d: path("M168 132.69L214.08 115l.33-.13a16 16 0 0 0-1.41-29.8L52.92 32.8A15.95 15.95 0 0 0 32.8 52.92L85.07 213a15.82 15.82 0 0 0 14.41 11h.78a15.84 15.84 0 0 0 14.61-9.59l.13-.33L132.69 168L184 219.31a16 16 0 0 0 22.63 0l12.68-12.68a16 16 0 0 0 0-22.63ZM195.31 208L144 156.69a16 16 0 0 0-26 4.93c0 .11-.09.22-.13.32l-17.65 46L48 48l159.85 52.2l-45.95 17.64l-.32.13a16 16 0 0 0-4.93 26L208 195.31Z");
}
</style><path class="fg2qc_sal"/>`,
		"fallback": "ph:cursor",
	});
}

export default Component;
