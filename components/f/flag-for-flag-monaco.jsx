import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cpsgke82m {
  fill: var(--svg-color--e6e7e8, #e6e7e8);
  d: path("M0 43c0 6.075 3.373 11 10 11h44c6.627 0 10-4.925 10-11V32H0z");
}

.jscz78bwr {
  fill: var(--svg-color--e22433, #e22433);
  d: path("M54 10H10C3.373 10 0 14.925 0 21v11h64V21c0-6.075-3.373-11-10-11");
}
</style><path class="jscz78bwr"/><path class="cpsgke82m"/>`,
		"fallback": "emojione-v1:flag-for-flag-monaco",
	});
}

export default Component;
