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
		"content": `<style>.dvq1jva5q {
  d: path("M19 12v7");
}

.ewz7d-bxg {
  d: path("M12 9v10");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.x-fkne0xd {
  d: path("M5 12v7");
}

.xhii43btc {
  d: path("M8 4a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2Z");
}

.z8g2jgblp {
  d: path("M5 12h14");
}
</style><g class="s0phu2bbs"><path class="xhii43btc"/><path class="ewz7d-bxg"/><path class="z8g2jgblp"/><path class="x-fkne0xd"/><path class="dvq1jva5q"/></g>`,
		"fallback": "iconmind:decompose-outline-bold",
	});
}

export default Component;
