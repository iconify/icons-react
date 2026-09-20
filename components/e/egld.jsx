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
		"content": `<style>.akmc-qr-d {
  fill: var(--svg-color--23f7dd, #23f7dd);
  d: path("M13.125 12L21 7.785L19.648 5.25l-7.354 2.756a.8.8 0 0 1-.588 0L4.352 5.25L3 7.793L10.875 12L3 16.207l1.352 2.543l7.354-2.756a.8.8 0 0 1 .588 0l7.354 2.756L21 16.193z");
}
</style><path class="akmc-qr-d"/>`,
		"fallback": "token-branded:egld",
	});
}

export default Component;
