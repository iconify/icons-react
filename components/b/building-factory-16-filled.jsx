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
		"content": `<style>.ac79a3-vp {
  fill: currentColor;
  d: path("M1.463 2.442A1.5 1.5 0 0 1 2.963 1h1.075a1.5 1.5 0 0 1 1.499 1.442l.423 11A1.5 1.5 0 0 1 4.46 15H2.54a1.5 1.5 0 0 1-1.5-1.558zM6.461 15c.332-.443.52-.998.498-1.596l-.253-6.586l3.487-2.713A.5.5 0 0 1 11 4.5v2.398l3.17-2.774A.5.5 0 0 1 15 4.5v9a1.5 1.5 0 0 1-1.5 1.5zM13 14v-3.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V14z");
}
</style><path class="ac79a3-vp"/>`,
		"fallback": "fluent:building-factory-16-filled",
	});
}

export default Component;
