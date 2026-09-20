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
		"content": `<style>.z41fibcpa {
  fill: currentColor;
  d: path("M16.27 14.658v2.727q0 .666-.475 1.14T14.654 19H9.327q-.667 0-1.141-.475t-.475-1.14v-2.727q-2.12-.666-3.416-1.851T3 10.133Q3 7.99 5.62 6.486t6.376-1.505t6.38 1.505T21 10.133q0 1.488-1.295 2.674t-3.436 1.85m-5.475-1.984h2.975v-.746h-2.206v-4.37h-.769z");
}
</style><path class="z41fibcpa"/>`,
		"fallback": "material-symbols-light:game-stick-left",
	});
}

export default Component;
