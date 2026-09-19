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
		"content": `<style>.py0fbwqdu {
  fill: currentColor;
  d: path("M14 17H4v2h10zm6-8H4v2h16zM4 15h16v-2H4zM4 5v2h16V5z");
}
</style><path class="py0fbwqdu"/>`,
		"fallback": "ic:baseline-subject",
	});
}

export default Component;
