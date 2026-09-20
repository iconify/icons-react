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
		"content": `<style>.v_89xsb5o {
  fill: var(--svg-color--009688, #009688);
  d: path("M128 0C57.33 0 0 57.33 0 128s57.33 128 128 128s128-57.33 128-128S198.67 0 128 0m-6.67 230.605v-80.288H76.699l64.128-124.922v80.288h42.966z");
}
</style><path class="v_89xsb5o"/>`,
		"fallback": "logos:fastapi-icon",
	});
}

export default Component;
