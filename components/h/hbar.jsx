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
		"content": `<style>.n6s0unb4j {
  fill: var(--svg-color--fff, #fff);
  d: path("M19.875 21h-2.813v-5.063H6.937V21H4.125V3h2.812v5.062h10.125V3h2.813zM6.937 13.125h10.125v-2.25H6.937z");
}
</style><path class="n6s0unb4j"/>`,
		"fallback": "token-branded:hbar",
	});
}

export default Component;
