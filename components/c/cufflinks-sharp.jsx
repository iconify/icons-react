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
		"content": `<style>.dx6qgibjz {
  cx: 17.5px;
  cy: 8.5px;
  r: 3.75px;
}

.humz-r42z {
  d: path("M6.5 12.25v5.25m11-5.25v5.25m-13.75 0h5.5V20h-5.5zm11 0h5.5V20h-5.5z");
}

.jc6oap-gd {
  cx: 6.5px;
  cy: 8.5px;
  r: 3.75px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="jc6oap-gd"/><circle class="dx6qgibjz"/><path class="humz-r42z"/></g>`,
		"fallback": "iconoven:cufflinks-sharp",
	});
}

export default Component;
