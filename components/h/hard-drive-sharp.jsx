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
		"content": `<style>.znu28pc8v {
  fill: currentColor;
  d: path("M18.063 15.563q.437-.438.437-1.063t-.437-1.062T17 13t-1.062.438T15.5 14.5t.438 1.063T17 16t1.063-.437M22 9H2l4-4h12zM2 19v-8h20v8z");
}
</style><path class="znu28pc8v"/>`,
		"fallback": "material-symbols:hard-drive-sharp",
	});
}

export default Component;
