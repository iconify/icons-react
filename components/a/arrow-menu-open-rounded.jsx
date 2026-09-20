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
		"content": `<style>.mxcfcwczm {
  fill: currentColor;
  d: path("M9 20V4q0-.425.288-.712T10 3t.713.288T11 4v16q0 .425-.288.713T10 21t-.712-.288T9 20m4-4.2V8.2q0-.35.3-.475t.55.125l3.45 3.45q.3.3.3.7t-.3.7l-3.45 3.45q-.25.25-.55.125T13 15.8");
}
</style><path class="mxcfcwczm"/>`,
		"fallback": "material-symbols:arrow-menu-open-rounded",
	});
}

export default Component;
