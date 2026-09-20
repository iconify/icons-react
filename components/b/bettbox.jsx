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
		"content": `<style>.aszpx4bsz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m27.559 12.358l-6.92 23.064h6.17l6.92-23.064zM15.865 8.391L6.5 39.61h8.52l9.366-31.22zM37.02 16.25l-4.628 15.426h4.48L41.5 16.25z");
}
</style><path class="aszpx4bsz"/>`,
		"fallback": "arcticons:bettbox",
	});
}

export default Component;
