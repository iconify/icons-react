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
		"content": `<style>.f22e38lnm {
  fill: currentColor;
  d: path("M2 21v-3q0-.325.1-.625t.3-.575l8.35-11.25L9.6 4q-.125-.175-.175-.362T9.4 3.263t.125-.363t.275-.3q.35-.25.75-.2t.65.4l.8 1.075l.8-1.075q.25-.35.65-.4t.75.2t.4.65t-.2.75l-1.15 1.55L21.6 16.8q.2.275.3.575T22 18v3q0 .425-.287.713T21 22H3q-.425 0-.712-.288T2 21M12 7.225L4 18v2h3l4.175-5.85q.3-.425.825-.425t.825.425L17 20h3v-2zM9.45 20h5.1L12 16.45zm3.375-5.85L17 20zq-.3-.425-.825-.425t-.825.425L7 20l4.175-5.85q.3-.425.825-.425t.825.425");
}
</style><path class="f22e38lnm"/>`,
		"fallback": "material-symbols:camping-outline-rounded",
	});
}

export default Component;
