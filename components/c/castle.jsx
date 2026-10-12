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
		"content": `<style>.euafkmfqu {
  d: path("M9.75 21.25V17.5a2.25 2.25 0 0 1 4.5 0v3.75M5.1 10v2m13.8-2v2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.loihbmqpx {
  d: path("M2.75 20.75V5q0-.5.5-.5h.65q.5 0 .5.5v.5q0 .5.5.5h.45q.5 0 .5-.5V5q0-.5.5-.5H7q.5 0 .5.5v4.5q0 .5.5.5h.75q.5 0 .5-.5V9q0-.5.5-.5h.85q.5 0 .5.5v.5q0 .5.5.5h.8q.5 0 .5-.5V9q0-.5.5-.5h.85q.5 0 .5.5v.5q0 .5.5.5H16q.5 0 .5-.5V5q0-.5.5-.5h.65q.5 0 .5.5v.5q0 .5.5.5h.45q.5 0 .5-.5V5q0-.5.5-.5h.65q.5 0 .5.5v15.75q0 .5-.5.5H3.25q-.5 0-.5-.5");
}
</style><g class="hntgybcog"><path class="loihbmqpx"/><path class="euafkmfqu"/></g>`,
		"fallback": "iconoven:castle",
	});
}

export default Component;
