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
		"content": `<style>.tkm7_9baj {
  fill: currentColor;
  d: path("M7.52 14.692h.98l1.508-4.469q.13-.346-.083-.63t-.56-.285H6.173v.884h2.88zm3.634 0h.884v-2.365l2.289 2.365h1.212l-2.635-2.73l2.635-2.654h-1.173l-2.327 2.327V9.308h-.885zm5.577-.807h.769v-1.5H19v-.77h-1.5v-1.5h-.77v1.5h-1.5v.77h1.5zM5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20z");
}
</style><path class="tkm7_9baj"/>`,
		"fallback": "material-symbols-light:7k-plus",
	});
}

export default Component;
