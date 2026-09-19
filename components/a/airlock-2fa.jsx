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
		"content": `<style>.c5650rb2u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.996 15.681c2.896 1.917 4.628 5.096 4.628 8.493h0c0 5.68-4.756 10.287-10.624 10.287q-.837 0-1.665-.127m-4.397-1.714c-2.858-1.922-4.562-5.078-4.562-8.447c0-5.682 4.756-10.287 10.624-10.287q.861 0 1.71.134m4.164-4.634L32.479 3.5m-17.161 41l2.605-5.885");
}
</style><path class="c5650rb2u"/>`,
		"fallback": "arcticons:airlock-2fa",
	});
}

export default Component;
