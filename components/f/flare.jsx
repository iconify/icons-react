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
		"content": `<style>.klr7gobdq {
  fill: var(--svg-color--e62058, #e62058);
  d: path("M16.378 9.761h-8.88A4.487 4.487 0 0 0 3 14.141c0 .063.05.118.118.118h8.88c2.438.01 4.435-1.94 4.498-4.385a.12.12 0 0 0-.117-.118zM20.877 3H7.5a4.484 4.484 0 0 0-4.494 4.384c0 .064.049.118.113.118H16.5c2.438.01 4.435-1.938 4.499-4.384A.12.12 0 0 0 20.882 3zM5.252 21a2.255 2.255 0 0 0 2.252-2.259a2.255 2.255 0 0 0-2.252-2.258A2.255 2.255 0 0 0 3 18.74A2.255 2.255 0 0 0 5.252 21");
}
</style><path class="klr7gobdq"/>`,
		"fallback": "token-branded:flare",
	});
}

export default Component;
