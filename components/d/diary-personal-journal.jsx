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
		"content": `<style>.q2ytdablw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m4.5 38.613l9.63-13.36l13.083 6.802L43.5 9.387l-6.562 4.389M43.5 9.387l-1.909 7.712");
}
</style><path class="q2ytdablw"/>`,
		"fallback": "arcticons:diary-personal-journal",
	});
}

export default Component;
