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
		"content": `<style>.aaueqlbii {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M21 6.444v11.112L12 22l-9-4.444V6.444L12 2Z");
}

.ft5dv1b6b {
  fill: none;
}

.k5xdbzbio {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m12 2l9 4.444v11.112L12 22l-9-4.444V6.444zM3 6.444l9 4.445l9-4.445m-9 4.445V22M7.5 4.222l9 4.445");
}
</style><g class="ft5dv1b6b"><path class="aaueqlbii"/><path class="k5xdbzbio"/></g>`,
		"fallback": "coolicons:box-taped-duotone-sharp",
	});
}

export default Component;
