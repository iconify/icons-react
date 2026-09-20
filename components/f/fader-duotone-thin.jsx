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
		"content": `<style>.h2-2dgnfu {
  d: path("M12 3v18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kxnj7hzir {
  fill: currentColor;
  d: path("M8 11a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2 2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.unu22558p {
  d: path("M8 11a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2 2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2");
}
</style><g class="hntgybcog"><path class="kxnj7hzir"/><path class="h2-2dgnfu"/><path class="unu22558p"/></g>`,
		"fallback": "iconmind:fader-duotone-thin",
	});
}

export default Component;
