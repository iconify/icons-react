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
		"content": `<style>.mz-t8mgnv {
  fill: currentColor;
  d: path("M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zm0-1h12.769q.23 0 .423-.192t.192-.424V5.616q0-.116-.048-.222q-.048-.105-.144-.202L5.192 18.808q.097.096.202.144t.222.048m9.192-1.308v-2h-2v-.884h2v-2h.884v2h2v.884h-2v2zm-8.5-9.5h4.384v-.884H6.308z");
}
</style><path class="mz-t8mgnv"/>`,
		"fallback": "material-symbols-light:exposure",
	});
}

export default Component;
