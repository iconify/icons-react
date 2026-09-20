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
		"content": `<style>.h9yhx_h2s {
  fill: currentColor;
  d: path("M11.7 21.3q-.475.475-1.087.213T10 20.575V14H3.425q-.675 0-.937-.612T2.7 12.3l7.725-7.725q.275-.275.638-.425t.762-.15H18q.825 0 1.413.588T20 6v6.175q0 .4-.15.763t-.425.637zM16 9v5.175l2-2V6h-6.175l-2 2H15q.425 0 .713.288T16 9m-4 4v5.175l2-2V10H7.825l-2 2H11q.425 0 .713.288T12 13");
}
</style><path class="h9yhx_h2s"/>`,
		"fallback": "material-symbols:azm-outline-rounded",
	});
}

export default Component;
