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
		"content": `<style>.are7cobgj {
  fill: currentColor;
  d: path("M2 21v-3q0-.325.1-.625t.3-.575l8.35-11.25L9.6 4q-.125-.175-.175-.362T9.4 3.263t.125-.363t.275-.3q.35-.25.75-.2t.65.4l.8 1.075l.8-1.075q.25-.35.65-.4t.75.2t.4.65t-.2.75l-1.15 1.55L21.6 16.8q.2.275.3.575T22 18v3q0 .425-.287.713T21 22H3q-.425 0-.712-.288T2 21m6.225-1h7.55L12 14.725z");
}
</style><path class="are7cobgj"/>`,
		"fallback": "material-symbols:camping-rounded",
	});
}

export default Component;
