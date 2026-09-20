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
		"content": `<style>.i5d2grbwo {
  d: path("M13 2H6v14h10V5");
}

.rdlk7zbpa {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M13 2H6v14h10V5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.s27ukbqxc {
  d: path("M16 8H9v14h10V11");
}

.xcmc2wqaf {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M16 8H9v14h10V11");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="rdlk7zbpa"/><path class="xcmc2wqaf"/><path class="i5d2grbwo"/><path class="s27ukbqxc"/></g>`,
		"fallback": "iconmind:corpus-duotone-bold",
	});
}

export default Component;
