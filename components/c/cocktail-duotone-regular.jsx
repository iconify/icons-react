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
		"content": `<style>.i-2dnzb7m {
  d: path("M12 14v6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qw7b_6b1t {
  d: path("M8 20h8");
}

.rait5obsl {
  fill: currentColor;
  d: path("M4 6h16l-8 8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.wj6ylmbne {
  d: path("M4 6h16l-8 8Z");
}

.z9owi-ayh {
  d: path("m15 8 4 -4");
}
</style><g class="nrj6p8qat"><path class="rait5obsl"/><path class="wj6ylmbne"/><path class="i-2dnzb7m"/><path class="qw7b_6b1t"/><path class="z9owi-ayh"/></g>`,
		"fallback": "iconmind:cocktail-duotone-regular",
	});
}

export default Component;
