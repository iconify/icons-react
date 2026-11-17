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

.g241b8iuo {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 6h12l-4 4H4zm0 8h12l-4 4H4zm-4-4l4 4m8-4l4 4");
}

.yx9g4wsqi {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m20 6l-3 3H5l3-3ZM8 14l-4-4h12l4 4Zm8 4H4l3-3h12Z");
}
</style><g class="ft5dv1b6b"><path class="yx9g4wsqi"/><path class="g241b8iuo"/></g>`,
		"fallback": "coolicons:currency-solana-duotone",
	});
}

export default Component;
