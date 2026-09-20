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
		"content": `<style>.v94lqgsif {
  fill: currentColor;
  d: path("M6 22q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4v16q0 .825-.587 1.413T18 22zm0-2h12V4h-2v6.125q0 .3-.25.438t-.5-.013l-1.225-.75q-.25-.15-.513-.15T13 9.8l-1.225.75q-.25.15-.512.013T11 10.125V4H6zm0 0V4zm5-9.875q0 .3.263.438t.512-.013L13 9.8q.25-.15.512-.15t.513.15l1.225.75q.25.15.5.013t.25-.438q0 .3-.25.438t-.5-.013l-1.225-.75q-.25-.15-.513-.15T13 9.8l-1.225.75q-.25.15-.513.013T11 10.125");
}
</style><path class="v94lqgsif"/>`,
		"fallback": "material-symbols:book-outline-rounded",
	});
}

export default Component;
