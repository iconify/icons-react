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
		"content": `<style>.fbapazbcy {
  fill: currentColor;
  d: path("M160 58H64a14 14 0 0 0-14 14v152a6 6 0 0 0 9.49 4.88L112 191.37l52.52 37.51A6 6 0 0 0 174 224V72a14 14 0 0 0-14-14m2 154.34l-46.52-33.22a6 6 0 0 0-7 0L62 212.34V72a2 2 0 0 1 2-2h96a2 2 0 0 1 2 2ZM206 40v152a6 6 0 0 1-12 0V40a2 2 0 0 0-2-2H88a6 6 0 0 1 0-12h104a14 14 0 0 1 14 14");
}
</style><path class="fbapazbcy"/>`,
		"fallback": "ph:bookmarks-simple-light",
	});
}

export default Component;
