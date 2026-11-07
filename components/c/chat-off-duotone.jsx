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
		"content": `<style>.fgbult_xp {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M10 3h9a2.003 2.003 0 0 1 2 2v9ZM8 17c-.773 0-1.472.473-2 1l-2 2c-.369.369-1-.262-1-1V5c0-.787.46-1.5 1.177-1.823L18 17Z");
}

.ft5dv1b6b {
  fill: none;
}

.vrvo9db7v {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 17H8c-.64 0-1.36.36-2 1l-2 2c-.369.369-1-.262-1-1V5a2 2 0 0 1 1.177-1.823M10 3h9a2 2 0 0 1 2 2v9m-3 3h-6M3 2l19 19");
}
</style><g class="ft5dv1b6b"><path class="fgbult_xp"/><path class="vrvo9db7v"/></g>`,
		"fallback": "coolicons:chat-off-duotone",
	});
}

export default Component;
