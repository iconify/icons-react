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
		"content": `<style>.j4xts30pb {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12.24 16.24a6 6 0 1 1 0 -8.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jcwhwvnse {
  d: path("M12.24 16.24a6 6 0 1 1 0 -8.5");
}

.l3ca9u8kt {
  d: path("M17 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rxwr8htky {
  fill: currentColor;
  d: path("M17 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="rxwr8htky"/><path class="j4xts30pb"/><path class="jcwhwvnse"/><path class="l3ca9u8kt"/></g>`,
		"fallback": "iconmind:consumer-duotone-regular",
	});
}

export default Component;
