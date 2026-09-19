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
		"content": `<style>.zrh_rcbzb {
  fill: currentColor;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2.5v43m-9.111-33.721V36.22m18.222-24.441V36.22m9.111-15.664v6.888M5.778 20.556v6.888");
}
</style><path class="zrh_rcbzb"/>`,
		"fallback": "arcticons:convertit",
	});
}

export default Component;
