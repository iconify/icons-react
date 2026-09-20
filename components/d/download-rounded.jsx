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
		"content": `<style>.tq6ewab-b {
  fill: currentColor;
  d: path("M11.702 15.195q-.136-.053-.267-.184l-2.62-2.619q-.146-.146-.152-.344t.152-.363q.166-.166.357-.169q.192-.003.357.163L11.5 13.65V5.5q0-.213.143-.357T12 5t.357.143t.143.357v8.15l1.971-1.971q.146-.146.347-.153t.366.159q.16.165.163.354t-.162.353l-2.62 2.62q-.13.13-.267.183q-.136.053-.298.053t-.298-.053M6.616 19q-.691 0-1.153-.462T5 17.384v-1.923q0-.213.143-.356t.357-.144t.357.144t.143.356v1.923q0 .231.192.424t.423.192h10.77q.23 0 .423-.192t.192-.424v-1.923q0-.213.143-.356t.357-.144t.357.144t.143.356v1.923q0 .691-.462 1.153T17.384 19z");
}
</style><path class="tq6ewab-b"/>`,
		"fallback": "material-symbols-light:download-rounded",
	});
}

export default Component;
