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
		"content": `<style>.jvavi9b2e {
  fill: currentColor;
  d: path("M6 21q-.846 0-1.423-.577T4 19v-2.77h3V3h13v16q0 .846-.577 1.423T18 21zm12-1q.425 0 .713-.288T19 19V4H8v12.23h9V19q0 .425.288.713T18 20M9.385 8.385v-1h8.23v1zm0 2.769v-1h8.23v1zM6 20h10v-2.77H5V19q0 .425.288.713T6 20m0 0H5h11z");
}
</style><path class="jvavi9b2e"/>`,
		"fallback": "material-symbols-light:contract-outline-sharp",
	});
}

export default Component;
