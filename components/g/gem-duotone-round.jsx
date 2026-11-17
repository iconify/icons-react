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

.jcbd3c-ml {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m19.731 10.41l-6.393 7.103a1.8 1.8 0 0 1-2.676 0L4.269 10.41a2 2 0 0 1 .073-2.752l1.486-1.486A4 4 0 0 1 8.657 5h6.686a4 4 0 0 1 2.829 1.172l1.486 1.486a2 2 0 0 1 .073 2.752");
}

.tbxotkq_g {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m16.5 14l-3.162 3.513a1.8 1.8 0 0 1-2.676 0L4.27 10.41a2 2 0 0 1 .073-2.752l1.486-1.486A4 4 0 0 1 8.657 5h6.686a4 4 0 0 1 2.829 1.172l1.486 1.486a2 2 0 0 1 .073 2.752zM8 9l2 2");
}
</style><g class="ft5dv1b6b"><path class="jcbd3c-ml"/><path class="tbxotkq_g"/></g>`,
		"fallback": "coolicons:gem-duotone-round",
	});
}

export default Component;
