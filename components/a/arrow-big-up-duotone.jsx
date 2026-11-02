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

.w_fqb0myy {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M9 19v-6a1 1 0 0 0-1-1H5c-.369 0-.369-.631 0-1l6-6a1.415 1.415 0 0 1 2 0l6 6c.369.369.369 1 0 1h-3a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1");
}

.yhzyzgqqi {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 20h-2a1 1 0 0 1-1-1v-6a1 1 0 0 0-1-1H5c-.369 0-.369-.631 0-1l6-6a1.414 1.414 0 0 1 2 0l6 6c.369.369.369 1 0 1h-3a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1z");
}
</style><g class="ft5dv1b6b"><path class="w_fqb0myy"/><path class="yhzyzgqqi"/></g>`,
		"fallback": "coolicons:arrow-big-up-duotone",
	});
}

export default Component;
