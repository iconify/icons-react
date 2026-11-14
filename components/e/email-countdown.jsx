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
		"content": `<style>.a6k62accz {
  d: path("M18 16.5V18l1.25 1");
}

.bic4-_k3z {
  d: path("M12.1 19.5H2.5v-15h19v8.6");
}

.qov011jqm {
  d: path("m2.5 7.5l9.5 6l9.5-6M14.75 18a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bic4-_k3z"/><path class="qov011jqm"/><path class="a6k62accz"/></g>`,
		"fallback": "uix-sharp:email-countdown",
	});
}

export default Component;
