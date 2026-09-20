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
		"content": `<style>.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tx7e2n7nm {
  d: path("m11.5 9 3 3 -3 3");
}

.ugdbidcqi {
  d: path("M16.23 2.94a10 10 0 1 1 -8.46 0");
}

.y5k8b5bfa {
  d: path("M9 9v6");
}
</style><g class="s0phu2bbs"><path class="ugdbidcqi"/><path class="y5k8b5bfa"/><path class="tx7e2n7nm"/></g>`,
		"fallback": "iconmind:agent-executor-outline-bold",
	});
}

export default Component;
