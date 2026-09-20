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
		"content": `<style>.oplph6bns {
  fill: currentColor;
  d: path("M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v3.963q0 .254-.18.434t-.434.18q-.615 0-1.148.233q-.532.234-.961.663l-3.635 3.659l-.807-.821q-.856-.856-2.043-.853q-1.186.003-2.042.859q-.723.723-.83 1.66t.33 1.755q.13.218.013.435T8.926 19zM4 8.808v2.384h16V8.808zm10.642 10.304l5.33-5.33q.145-.145.346-.152t.367.158q.16.166.162.354q.003.189-.162.354l-5.477 5.477q-.131.13-.268.187q-.136.055-.298.055q-.142 0-.288-.056q-.146-.055-.277-.186l-2.638-2.638q-.141-.14-.153-.342t.153-.366q.159-.16.35-.16q.192 0 .357.16z");
}
</style><path class="oplph6bns"/>`,
		"fallback": "material-symbols-light:credit-score-rounded",
	});
}

export default Component;
