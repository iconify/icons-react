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
		"content": `<style>.sra3zublt {
  fill: currentColor;
  d: path("M5.835 19.956q-.652.086-1.162-.317q-.51-.404-.615-1.056L2.87 10.177q-.067-.416.205-.758t.688-.41h.448v5.318q0 1.342.944 2.286t2.286.945H18.98q-.085.332-.344.56t-.608.284zm2.396-4.76q-.69 0-1.153-.462t-.462-1.153V5.616q0-.691.462-1.153T8.231 4h11.154q.69 0 1.153.463T21 5.616v7.965q0 .69-.462 1.153t-1.153.462zM10.308 8.5h7v-1h-7zm0 3.154h4v-1h-4z");
}
</style><path class="sra3zublt"/>`,
		"fallback": "material-symbols-light:cards-stack",
	});
}

export default Component;
