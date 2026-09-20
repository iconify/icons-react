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
		"content": `<style>.jjzep_bok {
  fill: currentColor;
  d: path("M25.84 23.543A1 1 0 0 1 25 24h-9a1 1 0 0 1-1-1V3a1 1 0 0 1 1.912-.41l9 20a1 1 0 0 1-.072.953M17 7.66V22h6.453zM2.75 24a.75.75 0 0 1-.68-1.065l9.5-20.5A.75.75 0 0 1 13 2.75v20.5a.75.75 0 0 1-.75.75z");
}
</style><path class="jjzep_bok"/>`,
		"fallback": "fluent:flip-horizontal-28-filled",
	});
}

export default Component;
