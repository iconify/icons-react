import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qh_l_yo_a {
  fill: currentColor;
  d: path("M224 52H32a4 4 0 0 0-4 4v136a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a4 4 0 0 0-4-4m-96 86.57L42.28 60h171.44ZM104.63 128L36 190.91V65.09Zm5.92 5.43L125.3 147a4 4 0 0 0 5.4 0l14.75-13.52L213.72 196H42.28Zm40.82-5.43L220 65.09v125.82Z");
}
</style><path class="qh_l_yo_a"/>`,
		"fallback": "ph:envelope-thin",
	});
}

export default Component;
