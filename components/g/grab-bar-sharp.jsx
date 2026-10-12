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
		"content": `<style>.eaczzeban {
  cx: 19px;
  cy: 6.5px;
  r: 2.25px;
}

.k6czokdum {
  d: path("M5 8.75v6.5h14v-6.5M2.75 21.25h18.5");
}

.v-nshmb6z {
  cx: 5px;
  cy: 6.5px;
  r: 2.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="v-nshmb6z"/><circle class="eaczzeban"/><path class="k6czokdum"/></g>`,
		"fallback": "iconoven:grab-bar-sharp",
	});
}

export default Component;
