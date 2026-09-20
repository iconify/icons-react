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
		"content": `<style>.s7lk2nbec {
  cx: 18px;
  cy: 18px;
  r: 18px;
  fill: var(--svg-color--78b159, #78b159);
}
</style><circle class="s7lk2nbec"/>`,
		"fallback": "twemoji:green-circle",
	});
}

export default Component;
