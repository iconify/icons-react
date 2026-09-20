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
		"content": `<style>.o-skpc_6n {
  fill: currentColor;
  d: path("M5 17v2V5zm15-8.442h-1V5H5v14h14v-3.558h1V20H4V4h16zM12 16V8h9v8zm5.063-2.937q.437-.438.437-1.063t-.437-1.062T16 10.5t-1.062.438T14.5 12t.438 1.063T16 13.5t1.063-.437M20 15V9h-7v6z");
}
</style><path class="o-skpc_6n"/>`,
		"fallback": "material-symbols-light:account-balance-wallet-outline-sharp",
	});
}

export default Component;
