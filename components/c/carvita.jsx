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
		"content": `<style>.vpnw2nw6l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m6.5 34.664l2.188 4.375h30.624M6.5 34.664L21.813 8.961h4.375M6.5 34.664h25.703L24 20.524m15.313 18.515L26.187 16.617L24 20.523M39.313 39.04l2.187-4.375L26.188 8.961M18.53 30.289L24 20.523m5.665 9.766H13.61L26.188 8.961");
}
</style><path class="vpnw2nw6l"/>`,
		"fallback": "arcticons:carvita",
	});
}

export default Component;
