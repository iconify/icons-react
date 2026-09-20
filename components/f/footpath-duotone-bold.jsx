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
		"content": `<style>.dfd9p4b0j {
  d: path("M7 4a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.l3ym0vb5p {
  fill: currentColor;
  d: path("M12.5 14a2.5 2.5 0 0 1 5 0v4a2.5 2.5 0 0 1 -5 0Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.o7epg_b9a {
  d: path("M6.5 7a2.5 2.5 0 0 1 5 0v4a2.5 2.5 0 0 1 -5 0Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tacfftb9n {
  fill: currentColor;
  d: path("M13 11a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ufjf60bpr {
  d: path("M13 11a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.vednljbyr {
  fill: currentColor;
  d: path("M6.5 7a2.5 2.5 0 0 1 5 0v4a2.5 2.5 0 0 1 -5 0Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.yp6zlzbcu {
  d: path("M12.5 14a2.5 2.5 0 0 1 5 0v4a2.5 2.5 0 0 1 -5 0Z");
}

.zr0hhtbng {
  fill: currentColor;
  d: path("M7 4a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="vednljbyr"/><path class="zr0hhtbng"/><path class="l3ym0vb5p"/><path class="tacfftb9n"/><path class="o7epg_b9a"/><path class="dfd9p4b0j"/><path class="yp6zlzbcu"/><path class="ufjf60bpr"/></g>`,
		"fallback": "iconmind:footpath-duotone-bold",
	});
}

export default Component;
