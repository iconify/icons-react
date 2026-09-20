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
		"content": `<style>.lt5xp_bvq {
  fill: currentColor;
  d: path("M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zm4.192-5.43v-3.14q0-.272-.252-.368t-.444.096l-1.278 1.277q-.242.242-.242.565t.242.566l1.277 1.276q.193.193.445.097q.252-.097.252-.37m8.358-2.134l-1.277-1.277q-.193-.192-.445-.096t-.252.369v3.138q0 .273.252.37t.444-.097l1.278-1.276q.242-.243.242-.566t-.243-.565");
}
</style><path class="lt5xp_bvq"/>`,
		"fallback": "material-symbols-light:fit-page-width-rounded",
	});
}

export default Component;
