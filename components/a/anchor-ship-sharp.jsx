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
		"content": `<style>.plq-ic0hl {
  d: path("M2.75 10.5C4.5 8.5 5.25 5.75 5 2.75m7 3.5V21M8.25 9h7.5M5.5 12.75H3.75a8.25 8.25 0 0 0 16.5 0H18.5");
}

.t163bq50a {
  d: path("M10.25 4L7.625 2.875L5 5.5");
}

.t88z8mbby {
  cx: 12px;
  cy: 4.5px;
  r: 1.75px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="plq-ic0hl"/><path class="t163bq50a"/><circle class="t88z8mbby"/></g>`,
		"fallback": "iconoven:anchor-ship-sharp",
	});
}

export default Component;
