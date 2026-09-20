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
		"content": `<style>.qopaqy9xo {
  fill: currentColor;
  d: path("M8.5 8.462h7V6.615q0-.23-.192-.423T14.885 6h-5.77q-.23 0-.423.192t-.192.424zM3.808 19q-.343 0-.576-.232T3 18.192v-3.961h3.385v.5q0 .212.144.356t.356.144t.356-.144t.144-.356v-.5h9.23v.5q0 .212.144.356t.357.144t.356-.144t.144-.356v-.5H21v3.961q0 .344-.232.576t-.576.232zM3 13.462v-3.379q0-.697.463-1.159t1.152-.462H7.5V6.615q0-.69.463-1.153T9.116 5h5.769q.69 0 1.153.462t.462 1.153v1.846h2.885q.69 0 1.152.463t.463 1.16v3.378h-3.384v-.731q0-.213-.144-.356t-.357-.144t-.356.144t-.144.356v.73h-9.23v-.73q0-.213-.144-.356q-.144-.144-.357-.144t-.356.144t-.144.356v.73z");
}
</style><path class="qopaqy9xo"/>`,
		"fallback": "material-symbols-light:home-repair-service-rounded",
	});
}

export default Component;
