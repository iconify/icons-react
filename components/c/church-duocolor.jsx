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
		"content": `<style>.fve589bal {
  d: path("M8 21V11l4-4l4 4v10m-8-8l-2 1c-1.226.613-2 1.387-2 2v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3c0-.613-.774-1.387-2-2l-2-1");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ohdwadw8m {
  stroke-opacity: 0.4;
  d: path("M12 3v4m-2-2h4");
}
</style><g class="nrj6p8qat"><path class="ohdwadw8m"/><path class="fve589bal"/></g>`,
		"fallback": "coolicons:church-duocolor",
	});
}

export default Component;
