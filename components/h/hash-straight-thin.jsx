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
		"content": `<style>.xd5xnnbft {
  fill: currentColor;
  d: path("M216 156h-52v-56h52a4 4 0 0 0 0-8h-52V40a4 4 0 0 0-8 0v52h-56V40a4 4 0 0 0-8 0v52H40a4 4 0 0 0 0 8h52v56H40a4 4 0 0 0 0 8h52v52a4 4 0 0 0 8 0v-52h56v52a4 4 0 0 0 8 0v-52h52a4 4 0 0 0 0-8m-116 0v-56h56v56Z");
}
</style><path class="xd5xnnbft"/>`,
		"fallback": "ph:hash-straight-thin",
	});
}

export default Component;
