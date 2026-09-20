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
		"content": `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.g2f-n6b6n {
  d: path("M12 6.5v5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jlfjgzbqx {
  d: path("M9 9h6");
}

.yxow7abeb {
  fill: currentColor;
  d: path("M13 3H6v18h12V8");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.zm2dyvb-o {
  d: path("M9 16h6");
}
</style><g class="hntgybcog"><path class="yxow7abeb"/><path class="abnm6smsv"/><path class="jlfjgzbqx"/><path class="g2f-n6b6n"/><path class="zm2dyvb-o"/></g>`,
		"fallback": "iconmind:diff-file-duotone-thin",
	});
}

export default Component;
