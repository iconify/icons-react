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
		"content": `<style>.bg3ybqwov {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M17 7.5v7m-3.5 0 7 -7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.bod4n0b3z {
  d: path("M2 18h20");
}

.dgfbh6b4z {
  d: path("M12 9v9");
}

.nhpfz0btj {
  d: path("M17 7.5v7m-3.5 0 7 -7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rbmqb921v {
  d: path("M7 7.5v7m-3.5 0 7 -7");
}

.s2qcfibfx {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M7 7.5v7m-3.5 0 7 -7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.shn2dkcie {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 9v9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xdhl9rnnf {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 18h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="xdhl9rnnf"/><path class="s2qcfibfx"/><path class="bg3ybqwov"/><path class="shn2dkcie"/><path class="bod4n0b3z"/><path class="rbmqb921v"/><path class="nhpfz0btj"/><path class="dgfbh6b4z"/></g>`,
		"fallback": "iconmind:frost-duotone-regular",
	});
}

export default Component;
