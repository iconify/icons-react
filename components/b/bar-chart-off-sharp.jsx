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
		"content": `<style>.bxj8ntb2b {
  fill: currentColor;
  d: path("M5 19V9.808h3V19zm5.5 0v-8.5l3 3V19zm3-8.311l-3-3V5h3zm5.5 5.5l-1.961-1.962v-.035H19zm.833 5.07L2.74 4.168l.713-.713l17.092 17.092z");
}
</style><path class="bxj8ntb2b"/>`,
		"fallback": "material-symbols-light:bar-chart-off-sharp",
	});
}

export default Component;
