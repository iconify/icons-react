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
		"content": `<style>.yk37xvbtw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m32.565 20.918l-21.584 3.597L27.408 3.5l-7.725 17.392zm-17.13 6.164l21.584-3.597L20.592 44.5l7.725-17.392z");
}
</style><path class="yk37xvbtw"/>`,
		"fallback": "arcticons:blixt-wallet",
	});
}

export default Component;
