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
		"content": `<style>.s-eomy-zu {
  fill: var(--svg-color--fff, #fff);
  d: path("m32.8 21.6l2.4 1.8l-.9-2.9l2.4-1.9h-3l-.9-2.9l-.9 2.9h-3l2.4 1.9l-.9 2.9zm0 20.8l2.4-1.8l-.9 2.9l2.4 1.9h-3l-.9 2.9l-.9-2.9h-3l2.4-1.9l-.9-2.9zM21.9 29.9l2.4-1.8l-.9 3l2.4 1.8h-3l-.9 3l-.9-3h-3l2.4-1.8l-.9-3zm20.2 0l-2.4-1.8l.9 3l-2.4 1.8h3l.9 3l.9-3h3l-2.4-1.8l.9-3z");
}

.ux0iofbdv {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--428bc1, #428bc1);
}
</style><circle class="ux0iofbdv"/><path class="s-eomy-zu"/>`,
		"fallback": "emojione:flag-for-flag-micronesia",
	});
}

export default Component;
