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
		"content": `<style>.m_qp_1b5o {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5.5 7.25Q3.75 7.25 3.75 9t1.75 1.75T7.25 9T5.5 7.25M10.25 9q0-1.75 1.75-1.75T13.75 9T12 10.75T10.25 9m8.25-1.75q-1.75 0-1.75 1.75t1.75 1.75T20.25 9T18.5 7.25M3.75 15q0-1.75 1.75-1.75T7.25 15T5.5 16.75T3.75 15M12 13.25q-1.75 0-1.75 1.75T12 16.75T13.75 15T12 13.25M16.75 15q0-1.75 1.75-1.75T20.25 15t-1.75 1.75T16.75 15");
}
</style><path class="m_qp_1b5o"/>`,
		"fallback": "uix-solid:drag-handle-horizontal",
	});
}

export default Component;
