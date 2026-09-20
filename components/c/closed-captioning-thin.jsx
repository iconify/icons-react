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
		"content": `<style>.gpb5-6b0w {
  fill: currentColor;
  d: path("M224 52H32a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12m4 140a4 4 0 0 1-4 4H32a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h192a4 4 0 0 1 4 4Zm-112.54-38.29a4 4 0 0 1-1.46 5.47a36 36 0 1 1 0-62.36a4 4 0 0 1-4 6.92a28 28 0 1 0 0 48.52a4 4 0 0 1 5.46 1.45m80 0a4 4 0 0 1-1.46 5.47a36 36 0 1 1 0-62.36a4 4 0 0 1-4 6.92a28 28 0 1 0 0 48.52a4 4 0 0 1 5.46 1.45");
}
</style><path class="gpb5-6b0w"/>`,
		"fallback": "ph:closed-captioning-thin",
	});
}

export default Component;
