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
		"content": `<style>.y_p5yv07v {
  fill: currentColor;
  d: path("M20 11v4H4v-4a6.01 6.01 0 0 1 5-5.918V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v.082A6.01 6.01 0 0 1 20 11M2.171 17h19.658A3 3 0 0 1 19 21H5a3 3 0 0 1-2.829-4");
}
</style><path class="y_p5yv07v"/>`,
		"fallback": "coolicons:hard-hat-fill-round",
	});
}

export default Component;
