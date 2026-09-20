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
		"content": `<style>.ftkanbtsf {
  fill: currentColor;
  d: path("M224 52H32a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12M32 60h192a4 4 0 0 1 4 4v28H28V64a4 4 0 0 1 4-4m192 136H32a4 4 0 0 1-4-4v-92h200v92a4 4 0 0 1-4 4m-20-28a4 4 0 0 1-4 4h-32a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4m-64 0a4 4 0 0 1-4 4h-16a4 4 0 0 1 0-8h16a4 4 0 0 1 4 4");
}
</style><path class="ftkanbtsf"/>`,
		"fallback": "ph:credit-card-thin",
	});
}

export default Component;
