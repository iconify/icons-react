import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.kphejjb8s {
  fill-rule: evenodd;
  d: path("M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13");
}

.rno7hacaa {
  d: path("M22.5 13a9.5 9.5 0 1 1-19 0a9.5 9.5 0 0 1 19 0");
}
</style><g class="cuyn6tgcc"><path class="rno7hacaa"/><path clip-rule="evenodd" class="kphejjb8s"/></g>`,
		"fallback": "pepicons-pop:circle-big-filled-circle",
	});
}

export default Component;
