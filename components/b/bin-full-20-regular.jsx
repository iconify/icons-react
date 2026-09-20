import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mpc7ucc6b {
  fill: currentColor;
  d: path("M14.932 2.248a.5.5 0 0 1-.18.684L4.349 9H8v-.5A1.5 1.5 0 0 1 9.5 7H12v-.5A1.5 1.5 0 0 1 13.5 5h2A1.5 1.5 0 0 1 17 6.5V9h.5a.5.5 0 0 1 .5.5v6a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 15.5v-6a.5.5 0 0 1 .248-.432l12-7a.5.5 0 0 1 .684.18M16.5 10H3v5.5A1.5 1.5 0 0 0 4.5 17h11a1.5 1.5 0 0 0 1.5-1.5V10zM12 9V8H9.5a.5.5 0 0 0-.5.5V9zm1 0h3V6.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5z");
}
</style><path class="mpc7ucc6b"/>`,
		"fallback": "fluent:bin-full-20-regular",
	});
}

export default Component;
