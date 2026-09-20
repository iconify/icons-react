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
		"content": `<style>.osw9zbcjd {
  fill: currentColor;
  d: path("M4 21V5h3.385V2.77h1.077V5h7.154V2.77h1V5H20v6.308h-1v-.692H5V20h8.096v1zM5 9.615h14V6H5zm0 0V6zM16.37 21q-.35 0-.62-.27t-.27-.618v-2.8q0-.35.27-.6t.62-.25h.11v-1q0-.749.511-1.259t1.259-.51t1.259.51t.51 1.258v1h.112q.358 0 .613.25q.256.25.256.6v2.8q0 .35-.256.62q-.255.269-.613.269zm.88-4.538h2v-1q0-.425-.288-.713t-.712-.288t-.712.288t-.288.713z");
}
</style><path class="osw9zbcjd"/>`,
		"fallback": "material-symbols-light:calendar-lock-outline-sharp",
	});
}

export default Component;
