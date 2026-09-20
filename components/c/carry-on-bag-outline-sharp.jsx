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
		"content": `<style>.uu_0kfbfj {
  fill: currentColor;
  d: path("M16 17q1.25 0 2.125.875T19 20t-.875 2.125T16 23q-.95 0-1.713-.55T13.176 21H6V7h8V4h-2V2h4zm-7 2V9H8v10zm2-10v10h2.175q.1-.375.325-.687t.5-.563V9zm6.063 12.063q.437-.438.437-1.063t-.437-1.062T16 18.5t-1.062.438T14.5 20t.438 1.063T16 21.5t1.063-.437M9 19V9zm2-10v10z");
}
</style><path class="uu_0kfbfj"/>`,
		"fallback": "material-symbols:carry-on-bag-outline-sharp",
	});
}

export default Component;
