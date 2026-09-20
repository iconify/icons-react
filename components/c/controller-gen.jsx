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
		"content": `<style>.x95j0000j {
  fill: currentColor;
  d: path("M12 17.5q2.289 0 3.894-1.606T17.5 12t-1.606-3.894T12 6.5T8.106 8.106T6.5 12t1.606 3.894T12 17.5m0-1q-1.861 0-3.18-1.32T7.5 12t1.32-3.18T12 7.5t3.18 1.32T16.5 12t-1.32 3.18T12 16.5m-.354-4.146q.16.16.354.16t.354-.16l1.4-1.4q.16-.16.16-.354t-.16-.354t-.354-.16t-.354.16l-1.4 1.4q-.16.16-.16.354t.16.354M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20z");
}
</style><path class="x95j0000j"/>`,
		"fallback": "material-symbols-light:controller-gen",
	});
}

export default Component;
