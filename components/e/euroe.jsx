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
		"content": `<style>.b1zi16b4n {
  fill: var(--svg-color--fff, #fff);
  d: path("M3 3h18v3.214H6.214v1.929H21v3.214H3zm0 9.643h18v3.214H6.214v1.929H21V21H3z");
}
</style><path class="b1zi16b4n"/>`,
		"fallback": "token-branded:euroe",
	});
}

export default Component;
