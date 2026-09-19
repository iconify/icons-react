import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hl-d_qb-n {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m2.564 47L34 46.896V58h-4V35.445c-1.19-.693-2-1.969-2-3.445c0-1.133.475-2.15 1.23-2.878l-.83-3.095L32.234 25l.269 1H34v2.554c1.19.692 2 1.968 2 3.446a4 4 0 0 1-1.139 2.789L38.4 47.975z");
}

.rt_37l3dj {
  cx: 32px;
  cy: 32px;
  r: 3px;
  fill: currentColor;
}
</style><path class="hl-d_qb-n"/><circle class="rt_37l3dj"/>`,
		"fallback": "emojione-monotone:five-thirty",
	});
}

export default Component;
