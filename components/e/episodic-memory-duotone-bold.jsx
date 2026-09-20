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
		"content": `<style>.gmguvrbuj {
  d: path("M16.5 8.5V11H19");
}

.ir77sxbxc {
  fill: currentColor;
  d: path("M11 11a5.5 5.5 0 1 0 11 0 5.5 5.5 0 1 0 -11 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.kfs1394gk {
  d: path("M2 16h6");
}

.mvdjtxbun {
  d: path("M2 11h6");
}

.p2jp-6g9f {
  d: path("M11 11a5.5 5.5 0 1 0 11 0 5.5 5.5 0 1 0 -11 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vqqpf8dpx {
  d: path("M2 6h6");
}
</style><g class="s0phu2bbs"><path class="ir77sxbxc"/><path class="vqqpf8dpx"/><path class="mvdjtxbun"/><path class="kfs1394gk"/><path class="p2jp-6g9f"/><path class="gmguvrbuj"/></g>`,
		"fallback": "iconmind:episodic-memory-duotone-bold",
	});
}

export default Component;
