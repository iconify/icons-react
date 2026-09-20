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
		"content": `<style>.pi2g5bq9h {
  cx: 18px;
  cy: 18px;
  r: 18px;
  fill: var(--svg-color--55acee, #55acee);
}
</style><circle class="pi2g5bq9h"/>`,
		"fallback": "twemoji:blue-circle",
	});
}

export default Component;
