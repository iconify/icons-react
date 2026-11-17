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
		"content": `<style>.a26cjoroh {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 21V11l4-4l4 4v10m-8-8l-4 2v6h16v-6l-4-2M12 3v4m-2-2h4");
}

.ft5dv1b6b {
  fill: none;
}

.o4zu9bnye {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 21v-6l4-2v-2l4-4l4 4v2l4 2v6Z");
}
</style><g class="ft5dv1b6b"><path class="o4zu9bnye"/><path class="a26cjoroh"/></g>`,
		"fallback": "coolicons:church-duotone-sharp",
	});
}

export default Component;
