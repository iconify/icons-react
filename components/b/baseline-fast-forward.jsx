import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.t-qenbb4q {
  fill: currentColor;
  d: path("m4 18l8.5-6L4 6zm9-12v12l8.5-6z");
}
</style><path class="t-qenbb4q"/>`,
		"fallback": "ic:baseline-fast-forward",
	});
}

export default Component;
