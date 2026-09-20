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
		"content": `<style>.c9q1b2rxk {
  fill: currentColor;
  d: path("M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-96 24h32a8 8 0 0 1 0 16h-32a8 8 0 0 1 0-16m8 152H64V96h56Zm72 0h-56V96h56Z");
}
</style><path class="c9q1b2rxk"/>`,
		"fallback": "ph:elevator-fill",
	});
}

export default Component;
