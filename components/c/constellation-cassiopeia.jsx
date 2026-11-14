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
		"content": `<style>.jkv8shb-i {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2.5 9.5q0-.829.585-1.414q.586-.587 1.415-.587t1.415.587T6.5 9.5q0 .577-.284 1.037l1.502 2.004q.246-.041.532-.041t.532.041l1.443-1.924Q10 10.171 10 9.5q0-2 2-2t2 2q0 .671-.225 1.117l1.443 1.924q.246-.041.532-.041t.532.041l1.443-1.924Q17.5 10.171 17.5 9.5q0-2 2-2t2 2t-2 2q-.286 0-.532-.041l-1.443 1.924q.225.446.225 1.117q0 2-2 2t-2-2q0-.671.225-1.117l-1.443-1.924q-.246.041-.532.041t-.532-.041l-1.443 1.924q.225.446.225 1.117q0 2-2 2t-2-2q0-.671.225-1.117l-1.459-1.945q-.245.063-.516.063q-.829 0-1.415-.587Q2.5 10.329 2.5 9.5");
}
</style><path class="jkv8shb-i"/>`,
		"fallback": "uix-solid:constellation-cassiopeia",
	});
}

export default Component;
