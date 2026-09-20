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
		"content": `<style>.d23kmtbkz {
  d: path("M9 7a3 3 0 0 1 -6 0");
}

.efyfmvbkh {
  d: path("M21 7a3 3 0 0 1 -6 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jwnes9bsk {
  d: path("M8 19h8");
}

.ozi-k-boi {
  d: path("M3 7h18");
}

.x5li7lwaz {
  d: path("M12 7v12");
}
</style><g class="hntgybcog"><path class="ozi-k-boi"/><path class="d23kmtbkz"/><path class="efyfmvbkh"/><path class="x5li7lwaz"/><path class="jwnes9bsk"/></g>`,
		"fallback": "iconmind:bias-outline-thin",
	});
}

export default Component;
