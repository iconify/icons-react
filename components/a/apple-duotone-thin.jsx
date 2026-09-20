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
		"content": `<style>.b_cpf_5uv {
  fill: currentColor;
  d: path("M12 9c-3 -4 -8 -2 -8 4 0 5 4 8 8 6 4 2 8 -1 8 -6 0 -6 -5 -8 -8 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.bpf3snbqm {
  d: path("M12 9V4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ujmlr05oy {
  d: path("M12 9c-3 -4 -8 -2 -8 4 0 5 4 8 8 6 4 2 8 -1 8 -6 0 -6 -5 -8 -8 -4");
}
</style><g class="hntgybcog"><path class="b_cpf_5uv"/><path class="ujmlr05oy"/><path class="bpf3snbqm"/></g>`,
		"fallback": "iconmind:apple-duotone-thin",
	});
}

export default Component;
