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
		"content": `<style>.c3xkg9bus {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 15h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.fh4wmcmpd {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 12h9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hsbav3b9a {
  d: path("M6 12h9");
}

.izqo6krhl {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 9h9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jm6ti-b3r {
  d: path("M6 15h12");
}

.ky4omnbla {
  d: path("M4 5h14l4 4v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2V7a2 2 0 0 1 2 -2m14 0v4h4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t4wfbu4kp {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 5h14l4 4v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2V7a2 2 0 0 1 2 -2m14 0v4h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zwh7a2bjz {
  d: path("M6 9h9");
}
</style><g class="s0phu2bbs"><path class="t4wfbu4kp"/><path class="izqo6krhl"/><path class="fh4wmcmpd"/><path class="c3xkg9bus"/><path class="ky4omnbla"/><path class="zwh7a2bjz"/><path class="hsbav3b9a"/><path class="jm6ti-b3r"/></g>`,
		"fallback": "iconmind:account-statement-duotone-bold",
	});
}

export default Component;
