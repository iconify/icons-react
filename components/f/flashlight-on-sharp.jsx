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
		"content": `<style>.q4tfgcc-y {
  fill: currentColor;
  d: path("M6 5V2h12v3zm7.063 10.063q.437-.438.437-1.063t-.437-1.062T12 12.5t-1.062.438T10.5 14t.438 1.063T12 15.5t1.063-.437M8 22V11L6 8V7h12v1l-2 3v11z");
}
</style><path class="q4tfgcc-y"/>`,
		"fallback": "material-symbols:flashlight-on-sharp",
	});
}

export default Component;
