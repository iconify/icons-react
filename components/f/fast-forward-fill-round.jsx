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
		"content": `<style>.aemn-9ejj {
  fill: currentColor;
  d: path("M11 9.101V9a3 3 0 0 1 4.543-2.572l5 3a2.998 2.998 0 0 1 0 5.144l-5 3A2.998 2.998 0 0 1 11 15v-.101l-4.457 2.673A2.998 2.998 0 0 1 2 15V9a3 3 0 0 1 4.543-2.572Z");
}
</style><path class="aemn-9ejj"/>`,
		"fallback": "coolicons:fast-forward-fill-round",
	});
}

export default Component;
