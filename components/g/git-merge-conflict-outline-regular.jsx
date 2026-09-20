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
		"content": `<style>.dhp6n31qa {
  d: path("M6 7.5V12l4.5 4.5");
}

.gjb6r-bki {
  d: path("M18 7.5V12l-4.5 4.5");
}

.jg5k_rbda {
  d: path("M16 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.kn0tcm93r {
  d: path("M4 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qe18cgb-r {
  d: path("m14.5 16.5 -5 5");
}

.x8v9hpbcn {
  d: path("m9.5 16.5 5 5");
}
</style><g class="nrj6p8qat"><path class="kn0tcm93r"/><path class="jg5k_rbda"/><path class="dhp6n31qa"/><path class="gjb6r-bki"/><path class="x8v9hpbcn"/><path class="qe18cgb-r"/></g>`,
		"fallback": "iconmind:git-merge-conflict-outline-regular",
	});
}

export default Component;
