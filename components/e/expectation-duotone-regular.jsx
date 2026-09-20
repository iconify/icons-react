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
		"content": `<style>.h95es8zjt {
  fill: currentColor;
  d: path("M3 16.5A2.5 2.5 0 0 1 5.5 14h13a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1 -2.5 2.5h-13A2.5 2.5 0 0 1 3 16.5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ji2v8gcnz {
  d: path("m7 7 3 3 6 -6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ywoqp9dou {
  d: path("M3 16.5A2.5 2.5 0 0 1 5.5 14h13a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1 -2.5 2.5h-13A2.5 2.5 0 0 1 3 16.5");
}
</style><g class="nrj6p8qat"><path class="h95es8zjt"/><path class="ji2v8gcnz"/><path class="ywoqp9dou"/></g>`,
		"fallback": "iconmind:expectation-duotone-regular",
	});
}

export default Component;
