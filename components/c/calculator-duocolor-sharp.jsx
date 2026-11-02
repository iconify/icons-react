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
		"content": `<style>.mewpg7bky {
  stroke-opacity: 0.4;
  d: path("M8 8h8m0 4v4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vqu5lfbch {
  d: path("M4 3h16v18H4Zm4 9h.01M12 12h.01M8 16h.01M12 16h.01");
}
</style><g class="nrj6p8qat"><path class="mewpg7bky"/><path class="vqu5lfbch"/></g>`,
		"fallback": "coolicons:calculator-duocolor-sharp",
	});
}

export default Component;
