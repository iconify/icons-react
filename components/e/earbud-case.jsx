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
		"content": `<style>.n3za96b2w {
  fill: currentColor;
  d: path("M3 12v5q0 1.65 1.175 2.825T7 21h10q1.65 0 2.825-1.175T21 17v-5h-4v2q0 .825-.587 1.413T15 16H9q-.825 0-1.412-.587T7 14v-2zm6 0v2h6v-2zm-6-2h18V7q0-1.65-1.175-2.825T17 3H7Q5.35 3 4.175 4.175T3 7z");
}
</style><path class="n3za96b2w"/>`,
		"fallback": "material-symbols:earbud-case",
	});
}

export default Component;
