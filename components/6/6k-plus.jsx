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
		"content": `<style>.a86_l1z0g {
  fill: currentColor;
  d: path("M7.154 14.692h2.23q.327 0 .549-.22q.22-.222.22-.549v-1.538q0-.327-.22-.548q-.222-.221-.549-.221H7.27v-1.424h2.885v-.884h-3q-.327 0-.548.22q-.222.222-.222.549v3.846q0 .327.222.548q.221.221.548.221m.115-.769v-1.538h2v1.538zm4.25.77h.885v-2.366l2.288 2.365h1.212l-2.635-2.73l2.635-2.654H14.73l-2.327 2.327V9.308h-.885zm5.212-.808h.769v-1.5H19v-.77h-1.5v-1.5h-.77v1.5h-1.5v.77h1.5zM5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20z");
}
</style><path class="a86_l1z0g"/>`,
		"fallback": "material-symbols-light:6k-plus",
	});
}

export default Component;
