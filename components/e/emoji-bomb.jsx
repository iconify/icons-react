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
		"content": `<style>.jib5shbho {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m28.619 11.561l3.829-3.829l7.758 7.758l-3.786 3.786m.034-7.792L42.44 5.5");
}

.nohukcb5c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.561 26.277c0 8.96 7.262 16.223 16.221 16.223c8.96 0 16.223-7.262 16.223-16.22v-.003c0-8.96-7.262-16.222-16.222-16.222S5.561 17.318 5.561 26.277");
}
</style><path class="jib5shbho"/><path class="nohukcb5c"/>`,
		"fallback": "arcticons:emoji-bomb",
	});
}

export default Component;
