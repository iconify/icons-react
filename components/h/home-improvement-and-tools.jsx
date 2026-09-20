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
		"content": `<style>.v_fd2_g3j {
  fill: currentColor;
  d: path("M7.962 3h8.076L14 5.892V10.5h-4V5.892zM10 11.5h4v3h-4zm0 4h4v3.077l-2 2l-2-2z");
}
</style><path class="v_fd2_g3j"/>`,
		"fallback": "material-symbols-light:home-improvement-and-tools",
	});
}

export default Component;
