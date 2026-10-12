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

.ixu7t3bpy {
  d: path("M11 5.25h2m-.4 5L11 13h2l-1.6 2.5");
}

.pw_pskbhp {
  width: 6px;
  height: 10px;
  x: 9px;
  y: 7.75px;
  rx: 1.5px;
}

.wdd_k9f2l {
  d: path("M16.5 4.21a9 9 0 1 1-9 0m-.65 2.42l.65-2.42l-2.42-.65");
}
</style><g class="hntgybcog"><path class="wdd_k9f2l"/><rect class="pw_pskbhp"/><path class="ixu7t3bpy"/></g>`,
		"fallback": "iconoven:battery-recycle",
	});
}

export default Component;
