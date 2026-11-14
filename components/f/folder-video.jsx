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
		"content": `<style>.spfnm5bcp {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5 4.25Q2.25 4.25 2.25 7v10q0 2.75 2.75 2.75h14q2.75 0 2.75-2.75V9q0-2.75-2.75-2.75h-7.189L10.03 4.47q-.105-.106-.243-.163T9.5 4.25zm7.895 6.191l1.052.622q1.104.654 1.104 1.937t-1.104 1.937l-1.052.622q-1.126.664-2.261.017Q9.5 14.928 9.5 13.621v-1.242q0-1.307 1.134-1.955q1.135-.647 2.261.017");
}
</style><path class="spfnm5bcp"/>`,
		"fallback": "uix-solid:folder-video",
	});
}

export default Component;
