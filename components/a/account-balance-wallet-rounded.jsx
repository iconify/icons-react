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
		"content": `<style>.gse2-vbkd {
  fill: currentColor;
  d: path("M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616V7h-6.384q-1.199 0-1.907.709Q11 8.417 11 9.616v4.769q0 1.198.709 1.906q.708.709 1.907.709H20v1.385q0 .69-.462 1.152T18.384 20zm8-4q-.691 0-1.153-.462T12 14.385v-4.77q0-.69.463-1.152T13.616 8h5.769q.69 0 1.153.463T21 9.616v4.769q0 .69-.462 1.153T19.385 16zm3.459-2.925Q17.5 12.65 17.5 12t-.425-1.075T16 10.5t-1.075.425T14.5 12t.425 1.075T16 13.5t1.075-.425");
}
</style><path class="gse2-vbkd"/>`,
		"fallback": "material-symbols-light:account-balance-wallet-rounded",
	});
}

export default Component;
