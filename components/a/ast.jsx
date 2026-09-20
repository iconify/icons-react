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
		"content": `<style>.k3ss3eb9z {
  fill: var(--svg-color--2b71ff, #2B71FF);
  d: path("M17.044 16.969L12 22l-2.5-2.5a15.16 15.16 0 0 0 7.544-2.531m4.162-5.782L12 2l-9.206 9.188L2 12c.425.331.837.675 1.281.988A15.01 15.01 0 0 0 15.606 15.3a15.1 15.1 0 0 0 4.775-2.088A15 15 0 0 0 22 12zm-6.775 2.925a17.35 17.35 0 0 0-9.137-2.562c4.2-1.819 9.356-2.069 14.081.644a13.7 13.7 0 0 1-4.944 1.918");
}
</style><path class="k3ss3eb9z"/>`,
		"fallback": "token-branded:ast",
	});
}

export default Component;
