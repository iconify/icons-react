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
		"content": `<style>.pfjqmo-ym {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.331 10.51L4.5 23.39l10.4 14.1h18.29l10.31-14.1l-8.741-12.88l-10.826 14.416z");
}
</style><path class="pfjqmo-ym"/>`,
		"fallback": "arcticons:domestika",
	});
}

export default Component;
