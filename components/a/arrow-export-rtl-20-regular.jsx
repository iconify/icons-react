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
		"content": `<style>.riwr3ojjt {
  fill: currentColor;
  d: path("M17.5 4a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-.5-.5M15 10a.5.5 0 0 0-.5-.5H3.707l3.147-3.146a.5.5 0 0 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.707L3.707 10.5H14.5a.5.5 0 0 0 .5-.5");
}
</style><path class="riwr3ojjt"/>`,
		"fallback": "fluent:arrow-export-rtl-20-regular",
	});
}

export default Component;
