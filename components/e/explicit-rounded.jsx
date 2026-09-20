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
		"content": `<style>.hb76_zu_u {
  fill: currentColor;
  d: path("M10.5 15.5v-3H14q.214 0 .357-.143T14.5 12t-.143-.357T14 11.5h-3.5v-3H14q.214 0 .357-.143T14.5 8t-.143-.357T14 7.5h-4q-.213 0-.357.143T9.5 8v8q0 .214.143.357T10 16.5h4q.214 0 .357-.143T14.5 16t-.143-.357T14 15.5zM5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20z");
}
</style><path class="hb76_zu_u"/>`,
		"fallback": "material-symbols-light:explicit-rounded",
	});
}

export default Component;
