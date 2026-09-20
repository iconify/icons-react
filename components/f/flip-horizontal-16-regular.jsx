import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.p2fqm9yar {
  fill: currentColor;
  d: path("M14.925 12.763A.5.5 0 0 1 14.5 13h-5a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .947-.224l5 10a.5.5 0 0 1-.022.487M10 4.618V12h3.691zM1.5 13a.5.5 0 0 1-.447-.724l5-10A.5.5 0 0 1 7 2.5v10a.5.5 0 0 1-.5.5z");
}
</style><path class="p2fqm9yar"/>`,
		"fallback": "fluent:flip-horizontal-16-regular",
	});
}

export default Component;
