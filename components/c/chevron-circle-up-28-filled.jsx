import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.g7vetjowq {
  fill: currentColor;
  d: path("M2 14c0 6.627 5.373 12 12 12s12-5.373 12-12S20.627 2 14 2S2 7.373 2 14m7.03 2.78a.75.75 0 0 1-1.06-1.06l5.5-5.5a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 1 1-1.06 1.06L14 11.81z");
}
</style><path class="g7vetjowq"/>`,
		"fallback": "fluent:chevron-circle-up-28-filled",
	});
}

export default Component;
