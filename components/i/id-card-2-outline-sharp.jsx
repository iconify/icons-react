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
		"content": `<style>.xzgn_gb3q {
  fill: currentColor;
  d: path("m7.45 12.85l3.525-3.525l-1.05-1.075l-2.5 2.5l-1.35-1.35l-1.05 1.05zM5.5 16H10v-1.5H5.5zm5.5 0h8v-.55q0-1.125-1.1-1.787T15 13t-2.9.663T11 15.45zm5.413-4.587Q17 10.825 17 10t-.587-1.412T15 8t-1.412.588T13 10t.588 1.413T15 12t1.413-.587M2 20V4h20v16zm2-2h16V6H4zm0 0V6z");
}
</style><path class="xzgn_gb3q"/>`,
		"fallback": "material-symbols:id-card-2-outline-sharp",
	});
}

export default Component;
