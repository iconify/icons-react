import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cwsiyubxp {
  fill: currentColor;
  d: path("M5.996 6.052c.017.733.386 1.239.657 1.534c.131.143.273.271.371.361c.113.103.196.178.283.264c.18.178.375.4.522.789H4.164a2.1 2.1 0 0 1 .523-.79c.086-.085.17-.16.283-.263c.099-.09.24-.218.37-.361c.272-.295.64-.801.656-1.534m1.028-2a6 6 0 0 0-.37.362c-.272.295-.64.8-.658 1.533c-.017-.732-.384-1.238-.655-1.533a6 6 0 0 0-.371-.361L4.913 4h2.168z");
}
</style><path class="cwsiyubxp"/>`,
		"fallback": "fluent:hourglass-three-quarter-12-filled",
	});
}

export default Component;
