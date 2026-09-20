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
		"content": `<style>.q_ea6-ain {
  fill: var(--svg-color--f113a3, #f113a3);
  d: path("M4.059 16.5v-9L12 3l4.04 2.25l-8.275 4.78v4.781L12 16.765l4.235-2.118V9.861L19.941 7.5v9L12 21z");
}
</style><path class="q_ea6-ain"/>`,
		"fallback": "token-branded:gfal",
	});
}

export default Component;
