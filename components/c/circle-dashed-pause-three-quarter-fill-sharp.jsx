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
		"content": `<style>.al2tf7bbj {
  fill: currentColor;
  d: path("M10.436 2.123a10 10 0 1 1-8.313 8.313a1 1 0 1 1 1.975.313a8 8 0 0 0 15.293 4.312a8 8 0 0 0-8.642-10.963a1 1 0 1 1-.313-1.975M3.91 6.122A10 10 0 0 1 6.122 3.91a1 1 0 1 1 1.176 1.618a8 8 0 0 0-1.77 1.77A1 1 0 1 1 3.91 6.122M11 15a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0Zm4 0a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0Z");
}
</style><path class="al2tf7bbj"/>`,
		"fallback": "coolicons:circle-dashed-pause-three-quarter-fill-sharp",
	});
}

export default Component;
