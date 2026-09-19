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
		"content": `<style>.xgftmk1hd {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  d: path("M6.249 14.882h22.4v17.696h-22.4zM41.751 5.5l-.026 36.427M28.537 14.985l13.159-9.411M28.566 32.55l13.113 9.468m-31.114-9.382l-.045 8.196m3.16-8.209l-.044 8.196m.007-.064c.003.615-.3 1.191-.792 1.506s-1.095.319-1.578.01s-.769-.88-.749-1.495");
}
</style><path class="xgftmk1hd"/>`,
		"fallback": "arcticons:cell-broadcast",
	});
}

export default Component;
