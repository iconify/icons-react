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
		"content": `<style>.igogxcwua {
  fill: currentColor;
  d: path("M224 154h-2v-18a94.37 94.37 0 0 0-64-89.1V40a14 14 0 0 0-14-14h-32a14 14 0 0 0-14 14v6.9A94.37 94.37 0 0 0 34 136v18h-2a14 14 0 0 0-14 14v24a14 14 0 0 0 14 14h192a14 14 0 0 0 14-14v-24a14 14 0 0 0-14-14m-14-18v18h-52V59.68A82.33 82.33 0 0 1 210 136m-98-98h32a2 2 0 0 1 2 2v114h-36V40a2 2 0 0 1 2-2m-66 98a82.33 82.33 0 0 1 52-76.32V154H46Zm180 56a2 2 0 0 1-2 2H32a2 2 0 0 1-2-2v-24a2 2 0 0 1 2-2h192a2 2 0 0 1 2 2Z");
}
</style><path class="igogxcwua"/>`,
		"fallback": "ph:hard-hat-light",
	});
}

export default Component;
