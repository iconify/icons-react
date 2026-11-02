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
		"content": `<style>.gilwoj1ah {
  stroke-opacity: 0.4;
  d: path("M12 3v9");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zcsz4bczm {
  d: path("M12 20H4l4-8h8l4 8zm-2 0v-3m4 3v-3");
}
</style><g class="nrj6p8qat"><path class="gilwoj1ah"/><path class="zcsz4bczm"/></g>`,
		"fallback": "coolicons:broom-duocolor",
	});
}

export default Component;
