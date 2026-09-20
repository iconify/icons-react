import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.v6ehlpb7m {
  cx: 18px;
  cy: 18px;
  r: 18px;
  fill: var(--svg-color--31373d, #31373d);
}
</style><circle class="v6ehlpb7m"/>`,
		"fallback": "twemoji:black-circle",
	});
}

export default Component;
