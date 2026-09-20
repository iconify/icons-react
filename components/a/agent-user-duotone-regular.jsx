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
		"content": `<style>.c0ny08jrw {
  fill: currentColor;
  d: path("M14.5 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.kosxb-loy {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8.69 3.37a4 4 0 1 1 -3.38 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.okqksmbze {
  d: path("M14.5 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.otjndhb3v {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12.5 21a4 4 0 0 1 8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.skbifdbcx {
  d: path("M8.69 3.37a4 4 0 1 1 -3.38 0");
}

.uc08apbot {
  d: path("M12.5 21a4 4 0 0 1 8 0");
}
</style><g class="nrj6p8qat"><path class="c0ny08jrw"/><path class="kosxb-loy"/><path class="otjndhb3v"/><path class="skbifdbcx"/><path class="okqksmbze"/><path class="uc08apbot"/></g>`,
		"fallback": "iconmind:agent-user-duotone-regular",
	});
}

export default Component;
