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
		"content": `<style>.a9wmr7brh {
  d: path("M12 10.25v4.5m0 2.5v.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jnsgalbhr {
  width: 3.5px;
  height: 2.75px;
  x: 5.25px;
  y: 4.5px;
  rx: 0.75px;
}

.tcj002bom {
  width: 18.5px;
  height: 13px;
  x: 2.75px;
  y: 7.25px;
  rx: 2.5px;
}

.y-t2inb9z {
  width: 3.5px;
  height: 2.75px;
  x: 15.25px;
  y: 4.5px;
  rx: 0.75px;
}
</style><g class="hntgybcog"><rect class="tcj002bom"/><rect class="jnsgalbhr"/><rect class="y-t2inb9z"/><path class="a9wmr7brh"/></g>`,
		"fallback": "iconoven:battery-warning",
	});
}

export default Component;
