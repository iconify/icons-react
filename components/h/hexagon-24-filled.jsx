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
		"content": `<style>.n-tujgbto {
  fill: currentColor;
  d: path("M8.105 3a2.25 2.25 0 0 0-1.948 1.125l-3.896 6.75a2.25 2.25 0 0 0 0 2.25l3.896 6.75A2.25 2.25 0 0 0 8.105 21h7.79a2.25 2.25 0 0 0 1.95-1.125l3.895-6.75a2.25 2.25 0 0 0 0-2.25l-3.896-6.75A2.25 2.25 0 0 0 15.895 3z");
}
</style><path class="n-tujgbto"/>`,
		"fallback": "fluent:hexagon-24-filled",
	});
}

export default Component;
