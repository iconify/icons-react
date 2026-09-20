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
		"content": `<style>.ph37z3bzk {
  fill: currentColor;
  d: path("M10.763 6.988q-.513-.513-.513-1.238t.513-1.237T12 4t1.238.513t.512 1.237t-.513 1.238T12 7.5t-1.237-.513M10 20v-5H9v-4.5q0-.825.588-1.412T11 8.5h2q.825 0 1.413.588T15 10.5V15h-1v5z");
}
</style><path class="ph37z3bzk"/>`,
		"fallback": "material-symbols:boy-sharp",
	});
}

export default Component;
