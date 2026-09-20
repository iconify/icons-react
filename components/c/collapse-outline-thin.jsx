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
		"content": `<style>.b8xluzc6p {
  d: path("M14 20v-6h6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ptvhb3bfe {
  d: path("M10 10 4 4");
}

.v6f1oidhi {
  d: path("m14 14 6 6");
}

.z_leajngu {
  d: path("M10 4v6H4");
}
</style><g class="hntgybcog"><path class="z_leajngu"/><path class="ptvhb3bfe"/><path class="b8xluzc6p"/><path class="v6f1oidhi"/></g>`,
		"fallback": "iconmind:collapse-outline-thin",
	});
}

export default Component;
