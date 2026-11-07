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
		"content": `<style>.nkbathbby {
  d: path("M4.636 5.636L3 6.444v11.112L12 22l6.025-2.975M8.423 3.766L12 2l9 4.444v9.9");
}

.nn5ugzt-g {
  stroke-opacity: 0.4;
  d: path("M3 6.444L7.83 8.83M12 13v9m2.374-12.283L21 6.444M2 3l19 19");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="nn5ugzt-g"/><path class="nkbathbby"/></g>`,
		"fallback": "coolicons:box-off-duocolor-sharp",
	});
}

export default Component;
