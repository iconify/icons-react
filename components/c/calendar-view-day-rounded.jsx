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
		"content": `<style>.fm45cu_fr {
  fill: currentColor;
  d: path("M5.616 16q-.667 0-1.141-.475T4 14.385v-4.77q0-.666.475-1.14T5.615 8h12.77q.666 0 1.14.475T20 9.615v4.77q0 .666-.475 1.14t-1.14.475zM4.475 5.616q-.194 0-.334-.144T4 5.115t.144-.356t.356-.144h15.025q.194 0 .335.144q.14.144.14.357t-.144.356t-.356.144zm0 13.769q-.194 0-.334-.144T4 18.884t.144-.356t.356-.144h15.025q.194 0 .335.144q.14.144.14.357t-.144.356t-.356.144z");
}
</style><path class="fm45cu_fr"/>`,
		"fallback": "material-symbols-light:calendar-view-day-rounded",
	});
}

export default Component;
