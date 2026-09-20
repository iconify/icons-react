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
		"content": `<style>.byqeqhagc {
  fill: currentColor;
  d: path("M224 52H32a4 4 0 0 0-4 4v136a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a4 4 0 0 0-4-4m-10.28 8L128 138.57L42.28 60ZM216 196H40a4 4 0 0 1-4-4V65.09L125.3 147a4 4 0 0 0 5.4 0L220 65.09V192a4 4 0 0 1-4 4");
}
</style><path class="byqeqhagc"/>`,
		"fallback": "ph:envelope-simple-thin",
	});
}

export default Component;
