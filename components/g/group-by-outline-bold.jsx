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
		"content": `<style>.hxoe7gx5p {
  d: path("M12 5v12");
}

.qfe94rk-q {
  d: path("M2 11h8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vox58lg-w {
  d: path("M12 11h10");
}

.ybh1xwgpp {
  d: path("M2 5h8");
}

.ygvoi9umd {
  d: path("M2 17h8");
}
</style><g class="s0phu2bbs"><path class="ybh1xwgpp"/><path class="qfe94rk-q"/><path class="ygvoi9umd"/><path class="hxoe7gx5p"/><path class="vox58lg-w"/></g>`,
		"fallback": "iconmind:group-by-outline-bold",
	});
}

export default Component;
