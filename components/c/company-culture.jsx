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
		"content": `<style>.uya687kfo {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3.935 9.143Q2.75 10.154 2.75 11.711v6.164q0 3.375 3.375 3.375h11.75q3.375 0 3.375-3.375v-6.164q0-1.557-1.185-2.568L14.19 4.132q-2.19-1.866-4.38 0zm7.535 8.887l-3-3q-.091-.091-.147-.207q-.914-1.914.586-3.414q1.372-1.372 3.091-.724q1.719-.648 3.091.724q1.5 1.5.586 3.414q-.056.116-.147.207l-3 3q-.052.053-.113.094t-.13.069t-.141.043t-.146.014t-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094");
}
</style><path class="uya687kfo"/>`,
		"fallback": "uix-solid:company-culture",
	});
}

export default Component;
