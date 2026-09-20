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
		"content": `<style>.t-a3m8r2l {
  fill: currentColor;
  d: path("M4 13V5.616q0-.691.463-1.153T5.616 4H11v9zm9-9h5.385q.69 0 1.152.463T20 5.622V9h-7zm0 16v-9h7v7.385q0 .69-.462 1.152T18.384 20zm-9-5h7v5H5.616q-.691 0-1.153-.462T4 18.378zm1-3h5V5H5.616q-.27 0-.443.173T5 5.616zm9-4h5V5.616q0-.27-.173-.443T18.385 5H14zm0 4v7h4.385q.269 0 .442-.173t.173-.442V12zm-9 4v2.385q0 .269.173.442t.443.173H10v-3z");
}
</style><path class="t-a3m8r2l"/>`,
		"fallback": "material-symbols-light:browse-outline",
	});
}

export default Component;
