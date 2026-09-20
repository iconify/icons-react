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
		"content": `<style>.jw-230sxh {
  d: path("M6 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.rckmicclj {
  d: path("M14 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.s3lxg1bko {
  d: path("M12 19c-4 0 -7 -3 -7 -6 0 -4 3 -6 7 -6s7 2 7 6c0 3 -3 6 -7 6");
}

.so0bhmbof {
  d: path("M11 13a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="s0phu2bbs"><path class="s3lxg1bko"/><path class="jw-230sxh"/><path class="rckmicclj"/><path class="so0bhmbof"/></g>`,
		"fallback": "iconmind:hamster-outline-bold",
	});
}

export default Component;
