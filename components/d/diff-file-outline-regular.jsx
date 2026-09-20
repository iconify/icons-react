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

.jlfjgzbqx {
  d: path("M9 9h6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zm2dyvb-o {
  d: path("M9 16h6");
}
</style><g class="nrj6p8qat"><path class="abnm6smsv"/><path class="jlfjgzbqx"/><path class="g2f-n6b6n"/><path class="zm2dyvb-o"/></g>`,
		"fallback": "iconmind:diff-file-outline-regular",
	});
}

export default Component;
