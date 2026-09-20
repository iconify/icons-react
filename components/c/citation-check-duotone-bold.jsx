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
		"content": `<style>.c4axibc2h {
  d: path("M8 3v4");
}

.d_am44b9l {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m4 14 5 5L20 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.fyea5htjc {
  d: path("M4 3v4");
}

.g45-xubrp {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 3v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.s2ely3boa {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M8 3v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.uo9ro-b5p {
  d: path("m4 14 5 5L20 8");
}
</style><g class="s0phu2bbs"><path class="g45-xubrp"/><path class="s2ely3boa"/><path class="d_am44b9l"/><path class="fyea5htjc"/><path class="c4axibc2h"/><path class="uo9ro-b5p"/></g>`,
		"fallback": "iconmind:citation-check-duotone-bold",
	});
}

export default Component;
