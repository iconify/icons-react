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
		"content": `<style>.kw27yrb1w {
  fill: currentColor;
  d: path("M7.616 22q-.667 0-1.141-.475T6 20.386V3.615q0-.69.463-1.152T7.616 2h8.846q.666 0 1.14.475t.475 1.14v3.216q.373.04.648.31q.275.269.275.648v1.769q0 .379-.275.648t-.648.31v9.869q0 .666-.475 1.14t-1.14.475zm1.269-10.404h6.307q.213 0 .357-.144t.143-.357t-.143-.356t-.357-.143H8.885q-.213 0-.357.144q-.143.144-.143.357t.143.356t.357.143");
}
</style><path class="kw27yrb1w"/>`,
		"fallback": "material-symbols-light:ad-units-rounded",
	});
}

export default Component;
