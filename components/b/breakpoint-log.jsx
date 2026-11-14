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
		"content": `<style>.dxqujih6o {
  fill: currentColor;
  d: path("M5.5 10.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.e6r6vi0vd {
  d: path("M12.5 10.25h6");
}

.gfq6vq5zx {
  d: path("M5 3.5h14A2.5 2.5 0 0 1 21.5 6v8.5A2.5 2.5 0 0 1 19 17h-9l-4 3.5V17H5a2.5 2.5 0 0 1-2.5-2.5V6A2.5 2.5 0 0 1 5 3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="gfq6vq5zx"/><path class="dxqujih6o"/><path class="e6r6vi0vd"/></g>`,
		"fallback": "uix:breakpoint-log",
	});
}

export default Component;
