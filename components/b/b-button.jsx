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
		"content": `<style>.b3f1sabng {
  fill: currentColor;
  d: path("M52 2H12C6.477 2 2 6.476 2 12v40c0 5.523 4.477 10 10 10h40c5.523 0 10-4.477 10-10V12c0-5.524-4.477-10-10-10m-9 36.727c0 5.102-4.211 9.25-9.391 9.25L21 48V16l12.609.023c5.18 0 9.391 4.148 9.391 9.25c0 2.648-1.137 5.04-2.956 6.727C41.863 33.688 43 36.078 43 38.727");
}

.nxgldyb7x {
  fill: currentColor;
  d: path("M33.609 21.068h-7.736v8.408h7.736c2.354 0 4.268-1.887 4.268-4.203c0-2.318-1.913-4.205-4.268-4.205m0 13.455h-7.736v8.408h7.736c2.354 0 4.268-1.887 4.268-4.205s-1.913-4.203-4.268-4.203");
}
</style><path class="nxgldyb7x"/><path class="b3f1sabng"/>`,
		"fallback": "emojione-monotone:b-button",
	});
}

export default Component;
