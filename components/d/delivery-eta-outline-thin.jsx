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

.kiksj5oln {
  d: path("M12 12a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.q7h9nybxu {
  d: path("M16 9v3");
}

.wrfjs43gu {
  d: path("M16 12h3");
}

.zzqmd5b6z {
  d: path("M8 4H3v16h5");
}
</style><g class="hntgybcog"><path class="zzqmd5b6z"/><path class="kiksj5oln"/><path class="q7h9nybxu"/><path class="wrfjs43gu"/></g>`,
		"fallback": "iconmind:delivery-eta-outline-thin",
	});
}

export default Component;
