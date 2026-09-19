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
		"content": `<style>.ktf24tbbh {
  fill: currentColor;
  d: path("M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27zM17 15.74L15.74 17L12 13.26L8.26 17L7 15.74L10.74 12L7 8.26L8.26 7L12 10.74L15.74 7L17 8.26L13.26 12z");
}
</style><path class="ktf24tbbh"/>`,
		"fallback": "ic:baseline-dangerous",
	});
}

export default Component;
