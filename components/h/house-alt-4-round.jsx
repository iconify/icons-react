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
		"content": `<style>.gq8opg1qv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m3 11l6.343-5.638a4 4 0 0 1 5.314 0L21 11m-2-1.778V17a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V9.222M12 17h-1a2 2 0 0 1-2-2v-2.435a2 2 0 0 1 .671-1.495l1-.889a2 2 0 0 1 2.658 0l1 .889A2 2 0 0 1 15 12.565V15a2 2 0 0 1-2 2z");
}
</style><path class="gq8opg1qv"/>`,
		"fallback": "coolicons:house-alt-4-round",
	});
}

export default Component;
