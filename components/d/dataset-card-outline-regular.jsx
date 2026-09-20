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
		"content": `<style>.ctl_2kq5g {
  d: path("M12 5.5V12");
}

.fymeavbya {
  d: path("M9 18.5h4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tkn_9lu9q {
  d: path("M5 4a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2Z");
}

.w2ifj5b6m {
  d: path("M8 7.5a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2V10a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2Z");
}

.zpdz8rbaf {
  d: path("M9 15.5h6");
}
</style><g class="nrj6p8qat"><path class="tkn_9lu9q"/><path class="w2ifj5b6m"/><path class="ctl_2kq5g"/><path class="zpdz8rbaf"/><path class="fymeavbya"/></g>`,
		"fallback": "iconmind:dataset-card-outline-regular",
	});
}

export default Component;
