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
		"content": `<style>.brstrf-8q {
  d: path("M13 2.75a1.75 1.75 0 1 0 0 3.5m-4.25 5.5a3.25 3.25 0 0 1 6.5 0Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n_08lybmx {
  width: 6.5px;
  height: 6.75px;
  x: 8.75px;
  y: 11.75px;
  rx: 1.25px;
}

.slffjrbay {
  d: path("M12 13.75v2.75m-2 2h4l-.5 2.75h-3Z");
}
</style><g class="hntgybcog"><path class="brstrf-8q"/><rect class="n_08lybmx"/><path class="slffjrbay"/></g>`,
		"fallback": "iconoven:eid-mubarak-lantern",
	});
}

export default Component;
