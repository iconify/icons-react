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
		"content": `<style>.aemwagbae {
  fill: currentColor;
  d: path("M16.27 14.658v4.361H7.711v-4.361q-2.121-.666-3.417-1.851T3 10.133Q3 7.99 5.62 6.486t6.376-1.505t6.38 1.505T21 10.133q0 1.488-1.295 2.674t-3.436 1.85m-5.475-1.984h2.975v-.746h-2.206v-4.37h-.769z");
}
</style><path class="aemwagbae"/>`,
		"fallback": "material-symbols-light:game-stick-left-sharp",
	});
}

export default Component;
