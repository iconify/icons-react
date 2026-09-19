import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ak-e895ul {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.964 7.162h8.018c12.85 0 21.115 13.322 10.996 23.024l-11.11 10.652l-8.019-7.56h-9.05");
}

.lbk7ap62u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.664 14.493h13.974c7.216 0 9.968 7.04 6.185 10.538l-6.07 5.613l-5.728-5.27h-5.383m-4.697.001H4.5");
}
</style><path class="lbk7ap62u"/><path class="ak-e895ul"/>`,
		"fallback": "arcticons:corhelper",
	});
}

export default Component;
