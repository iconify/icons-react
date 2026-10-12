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
		"content": `<style>.cs-d-7bky {
  d: path("M6.4 8.4L8 9.75l1.25-1l1.25 1l1.4-1.2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iva9qxbgz {
  cx: 18.5px;
  cy: 18.75px;
  r: 2.5px;
}

.ne7htm4pe {
  cx: 12.25px;
  cy: 20px;
  r: 1.25px;
}

.v3d2mkc4g {
  d: path("m9.58 3.8l6.34 11.4q.58 1.05-.62 1.05H3.95q-1.2 0-.7-1.09L8.5 3.84Q9 2.75 9.58 3.8");
}
</style><g class="hntgybcog"><path class="v3d2mkc4g"/><path class="cs-d-7bky"/><circle class="iva9qxbgz"/><circle class="ne7htm4pe"/></g>`,
		"fallback": "iconoven:avalanche-warning",
	});
}

export default Component;
