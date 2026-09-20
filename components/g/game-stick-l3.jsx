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
		"content": `<style>.ypfbqr80o {
  fill: currentColor;
  d: path("M12 5.442L10 2.77h4zm4.27 11.216v2.746q0 .666-.475 1.14t-1.141.475H9.327q-.667 0-1.141-.474t-.475-1.141v-2.746q-2.12-.666-3.416-1.851T3 12.133Q3 9.99 5.62 8.486t6.376-1.505t6.38 1.505T21 12.133q0 1.488-1.295 2.674t-3.436 1.85m-5.475-1.984h2.975v-.746h-2.206v-4.37h-.769z");
}
</style><path class="ypfbqr80o"/>`,
		"fallback": "material-symbols-light:game-stick-l3",
	});
}

export default Component;
