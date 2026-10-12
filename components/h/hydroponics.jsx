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
		"content": `<style>.azlst3iwo {
  d: path("M7.5 7.75q.38-2.91-2.5-3.5q-.38 2.91 2.5 3.5m0 0q2.88-.59 2.5-3.5q-2.88.59-2.5 3.5m9 0q.38-2.91-2.5-3.5q-.38 2.91 2.5 3.5m0 0q2.88-.59 2.5-3.5q-2.88.59-2.5 3.5m-9 0v3m9-3v3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l94dn-a9i {
  d: path("M7.5 15.25v4m0-2l-1.5 2m6-4v6m0-3.5l1.5 2m3-4.5v4m0-2l1.5 2");
}

.lf22kioxm {
  width: 18.5px;
  height: 4.5px;
  x: 2.75px;
  y: 10.75px;
  rx: 2.25px;
}
</style><g class="hntgybcog"><path class="azlst3iwo"/><rect class="lf22kioxm"/><path class="l94dn-a9i"/></g>`,
		"fallback": "iconoven:hydroponics",
	});
}

export default Component;
