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
		"content": `<style>.dsspm1bhc {
  fill: currentColor;
  d: path("M20.288 16.213Q20 15.925 20 15.5t.288-.712T21 14.5t.713.288t.287.712t-.288.713T21 16.5t-.712-.288M20 13V7h2v6zm-1.225 5H4q-1.25 0-2.125-.875T1 15V9q0-1.25.875-2.125T4 6h14v2H4q-.425 0-.712.288T3 9v6q0 .425.288.713T4 16h14q0 .575.213 1.088t.562.912M3 16V8z");
}
</style><path class="dsspm1bhc"/>`,
		"fallback": "material-symbols:battery-android-alert-outline",
	});
}

export default Component;
