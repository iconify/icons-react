import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.s3uvwy5gu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m43.5 22.882l-11.917 7.266L4.5 22.941m0-.507c0-3.54 2.621-6.411 5.854-6.411h27.292c3.233 0 5.854 2.87 5.854 6.41");
}

.vv2em8bfa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.354 9.602h27.292c3.233 0 5.854 2.63 5.854 5.875v17.046c0 3.245-2.621 5.875-5.854 5.875H10.354c-3.233 0-5.854-2.63-5.854-5.875V15.477c0-3.245 2.621-5.875 5.854-5.875");
}
</style><path class="s3uvwy5gu"/><path class="vv2em8bfa"/>`,
		"fallback": "arcticons:fwallet",
	});
}

export default Component;
