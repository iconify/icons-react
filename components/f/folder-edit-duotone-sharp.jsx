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
		"content": `<style>.eext-rbov {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 4h7l2 2h9v14H3Z");
}

.ft5dv1b6b {
  fill: none;
}

.myxm86_wj {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 6h9v14H3V4h7zM9 16v-2l4-4l2 2l-4 4Z");
}
</style><g class="ft5dv1b6b"><path class="eext-rbov"/><path class="myxm86_wj"/></g>`,
		"fallback": "coolicons:folder-edit-duotone-sharp",
	});
}

export default Component;
