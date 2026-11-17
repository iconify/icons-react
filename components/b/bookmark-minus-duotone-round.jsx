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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.mnxbo8bct {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M10 4h4a4 4 0 0 1 4 4v10c0 .855-1.718.855-3 0l-3-2l-3 2c-1.282.855-3 .855-3 0V8a4 4 0 0 1 4-4");
}

.yw98ovq2z {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 4h2a4 4 0 0 1 4 4v10c0 .855-1.718.855-3 0l-3-2l-3 2c-1.282.855-3 .855-3 0V8a4 4 0 0 1 4-4zm-3 6h6");
}
</style><g class="ft5dv1b6b"><path class="mnxbo8bct"/><path class="yw98ovq2z"/></g>`,
		"fallback": "coolicons:bookmark-minus-duotone-round",
	});
}

export default Component;
