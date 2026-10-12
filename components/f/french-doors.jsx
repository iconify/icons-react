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

.hoi44xq4a {
  width: 18.5px;
  height: 18.5px;
  x: 2.75px;
  y: 2.75px;
  rx: 2px;
}

.teeozjo9d {
  d: path("M12 2.75v18.5M5.75 5.75H9v8H5.75Zm9.25 0h3.25v8H15Z");
}
</style><g class="hntgybcog"><rect class="hoi44xq4a"/><path class="teeozjo9d"/></g>`,
		"fallback": "iconoven:french-doors",
	});
}

export default Component;
