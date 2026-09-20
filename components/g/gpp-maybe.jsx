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
		"content": `<style>.p0kiosmde {
  fill: currentColor;
  d: path("M12.434 15.049q.182-.182.182-.433q0-.252-.182-.434T12 14t-.434.182t-.182.433t.182.434t.434.182t.434-.182m-.934-2.626h1V7.769h-1zm.5 8.539q-3.014-.895-5.007-3.651T5 11.1V5.692l7-2.615l7 2.615V11.1q0 3.454-1.993 6.21T12 20.963");
}
</style><path class="p0kiosmde"/>`,
		"fallback": "material-symbols-light:gpp-maybe",
	});
}

export default Component;
