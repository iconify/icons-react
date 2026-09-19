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
		"content": `<style>.h__kugb8b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 12.488h39v23.028h-39zm19.498 23.025V12.484m-8.151 7.298H24m12.237 0H43.5");
}

.vit_ohddi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.577 28.094c5.737 2.368 11.363 2.4 16.846 0");
}
</style><path class="h__kugb8b"/><path class="vit_ohddi"/>`,
		"fallback": "arcticons:eatsure",
	});
}

export default Component;
