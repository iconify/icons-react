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
		"content": `<style>.cxi4c3g8h {
  fill: currentColor;
  d: path("M2 21v-2h20v2zm1-3v-7h3v7zm5 0V6h3v12zm5 0V9h3v9zm5 0V3h3v15z");
}
</style><path class="cxi4c3g8h"/>`,
		"fallback": "material-symbols:bar-chart-4-bars-sharp",
	});
}

export default Component;
