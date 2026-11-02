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

.nsxdq0b-j {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M11 17a2 2 0 0 1-2-2v-2a2 2 0 0 0-2-2H6c-.738 0-1.369-.631-1-1l6-6a1.415 1.415 0 0 1 2 0l6 6c.369.369-.262 1-1 1h-1a2 2 0 0 0-2 2v2a2 2 0 0 1-2 2Z");
}

.qtstjnboa {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 17h-1a2 2 0 0 1-2-2v-2a2 2 0 0 0-2-2H6c-.738 0-1.369-.631-1-1l6-6a1.414 1.414 0 0 1 2 0l6 6c.369.369-.262 1-1 1h-1a2 2 0 0 0-2 2v2a2 2 0 0 1-2 2zm-3 4h6");
}
</style><g class="ft5dv1b6b"><path class="nsxdq0b-j"/><path class="qtstjnboa"/></g>`,
		"fallback": "coolicons:caps-lock-duotone-round",
	});
}

export default Component;
