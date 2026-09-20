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
		"content": `<style>.c-pcdbceg {
  d: path("M4 14a4 4 0 0 1 2 -7.5A5 5 0 0 1 15.5 5a5.5 5.5 0 0 1 4.5 9Z");
}

.ffs26fbkv {
  d: path("M12 17v4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vy337188j {
  d: path("m9 18 3 3 3 -3");
}
</style><g class="s0phu2bbs"><path class="c-pcdbceg"/><path class="ffs26fbkv"/><path class="vy337188j"/></g>`,
		"fallback": "iconmind:download-cloud-outline-bold",
	});
}

export default Component;
