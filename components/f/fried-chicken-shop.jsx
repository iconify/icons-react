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
		"content": `<style>.qkmo8dbbd {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m8.242 16.819l1.207-1.207q3.759 1.204 7.579-.522q4.303-1.946 4.717-6q.424-3.007-1.245-4.899q-1.713-1.941-5-1.941q-4.786 0-6.898 4.527q-1.848 3.958-.247 7.807l-1.174 1.174q-.106-.177-.247-.345q-.706-.845-1.806-.895q-1.101-.049-1.88.73t-.73 1.88t.895 1.806q.511.427 1.111.542q.115.6.542 1.111q.706.845 1.806.895q1.101.049 1.88-.73t.73-1.88t-.895-1.806q-.168-.141-.345-.247");
}
</style><path class="qkmo8dbbd"/>`,
		"fallback": "uix-solid:fried-chicken-shop",
	});
}

export default Component;
