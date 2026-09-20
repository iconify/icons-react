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
		"content": `<style>.y0cv5w2ez {
  fill: currentColor;
  d: path("M232 164h-36V88.09a67.8 67.8 0 0 0 34.5 31a4 4 0 1 0 3-7.42A59.77 59.77 0 0 1 196 56a4 4 0 0 0-8 0a60 60 0 0 1-120 0a4 4 0 0 0-8 0a59.77 59.77 0 0 1-37.5 55.64a4 4 0 0 0 3 7.42a67.8 67.8 0 0 0 34.5-31V164H24a4 4 0 0 0 0 8h36v28a4 4 0 0 0 8 0v-28h120v28a4 4 0 0 0 8 0v-28h36a4 4 0 0 0 0-8m-84-43v43h-40v-43a68 68 0 0 0 40 0M68 88a68.43 68.43 0 0 0 32 30v46H68Zm88 76v-46a68.43 68.43 0 0 0 32-30v76Z");
}
</style><path class="y0cv5w2ez"/>`,
		"fallback": "ph:bridge-thin",
	});
}

export default Component;
