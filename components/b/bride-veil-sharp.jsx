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
		"content": `<style>.q91yvkbqm {
  d: path("M12 2.75c-4 0-6 4-7 9.25s-1.75 8-2.25 9.25h18.5C20.75 20 20 17.25 19 12s-3-9.25-7-9.25Z");
}

.qi0czrdcc {
  cx: 12px;
  cy: 10.5px;
  r: 3px;
}

.uauj50bvc {
  d: path("M7.75 21.25c.5-3.25 2.25-5 4.25-5s3.75 1.75 4.25 5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="q91yvkbqm"/><circle class="qi0czrdcc"/><path class="uauj50bvc"/></g>`,
		"fallback": "iconoven:bride-veil-sharp",
	});
}

export default Component;
