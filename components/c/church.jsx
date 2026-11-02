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
		"content": `<style>.v8pf18b0r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 21V11l4-4l4 4v10m-8-8l-2 1c-1.226.613-2 1.387-2 2v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3c0-.613-.774-1.387-2-2l-2-1M12 3v4m-2-2h4");
}
</style><path class="v8pf18b0r"/>`,
		"fallback": "coolicons:church",
	});
}

export default Component;
