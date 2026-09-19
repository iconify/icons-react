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
		"content": `<style>.g3hbu700x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m41.82 30.535l-8.136-11.784l-3.989 2.336l-5.905-9.79L4.5 35.784c18.136-12.337 27.782-3.774 39 .919");
}
</style><path class="g3hbu700x"/>`,
		"fallback": "arcticons:alltrails",
	});
}

export default Component;
