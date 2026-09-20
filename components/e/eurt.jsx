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
		"content": `<style>.hk79asbxz {
  fill: var(--svg-color--fff, #fff);
  d: path("M9 17.4h10.2V21H4.8V3h13.8v3.6H9v3.6h9v3.6H9z");
}
</style><path class="hk79asbxz"/>`,
		"fallback": "token-branded:eurt",
	});
}

export default Component;
