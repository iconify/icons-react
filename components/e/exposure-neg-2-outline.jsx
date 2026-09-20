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
		"content": `<style>.ng14uib8d {
  fill: currentColor;
  d: path("M12.1 19v-2.1l5-5.1q.825-.875 1.163-1.463T18.6 9q0-.725-.562-1.312T16.35 7.1q-.9 0-1.487.5t-.813 1.3l-2-.8q.35-1.125 1.45-2.113T16.4 5q2.075 0 3.238 1.188T20.8 9q0 1.125-.525 2.05T18.65 13.1L15 16.9l.05.1H21v2zM10 14H3v-2h7z");
}
</style><path class="ng14uib8d"/>`,
		"fallback": "material-symbols:exposure-neg-2-outline",
	});
}

export default Component;
