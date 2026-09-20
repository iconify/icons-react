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
		"content": `<style>.kk2lmcbyf {
  fill: currentColor;
  d: path("M6 17V9H4V7h4v10zm4.35 0l3.15-5.3L10.65 7H13l1.65 2.75L16.35 7h2.3l-2.8 4.7L19 17h-2.35l-2-3.35l-2 3.35z");
}
</style><path class="kk2lmcbyf"/>`,
		"fallback": "material-symbols:1x-mobiledata-outline",
	});
}

export default Component;
