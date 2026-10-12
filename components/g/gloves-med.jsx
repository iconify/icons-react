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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qdscspnon {
  d: path("M7.5 17h9m-9-5.75v-4a1.25 1.25 0 0 1 2.5 0V5a1.25 1.25 0 0 1 2.5 0v-.75a1.25 1.25 0 0 1 2.5 0V5.5a1.25 1.25 0 0 1 2.5 0v5.75Zm2.5-4v4M12.5 5v6.25M15 5.5v5.75");
}

.rgf1jio2v {
  width: 18.5px;
  height: 10px;
  x: 2.75px;
  y: 11.25px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="rgf1jio2v"/><path class="qdscspnon"/></g>`,
		"fallback": "iconoven:gloves-med",
	});
}

export default Component;
