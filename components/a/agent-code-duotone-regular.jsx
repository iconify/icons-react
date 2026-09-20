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
		"content": `<style>.dqu3vybkn {
  d: path("m14 13 -2.5 2.5L14 18");
}

.jvqqb0bfs {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m14 13 -2.5 2.5L14 18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kosxb-loy {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8.69 3.37a4 4 0 1 1 -3.38 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.skbifdbcx {
  d: path("M8.69 3.37a4 4 0 1 1 -3.38 0");
}

.t1mn-bbal {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m19 13 2.5 2.5L19 18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.t8y3wdrkk {
  d: path("m19 13 2.5 2.5L19 18");
}
</style><g class="nrj6p8qat"><path class="kosxb-loy"/><path class="jvqqb0bfs"/><path class="t1mn-bbal"/><path class="skbifdbcx"/><path class="dqu3vybkn"/><path class="t8y3wdrkk"/></g>`,
		"fallback": "iconmind:agent-code-duotone-regular",
	});
}

export default Component;
