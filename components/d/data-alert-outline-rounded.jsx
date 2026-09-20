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
		"content": `<style>.busjusb2z {
  fill: currentColor;
  d: path("M16.35 8.85q.15-.15.15-.35v-3q0-.2-.15-.35T16 5t-.35.15t-.15.35v3q0 .2.15.35T16 9t.35-.15m0 2q.15-.15.15-.35t-.15-.35T16 10t-.35.15t-.15.35t.15.35t.35.15t.35-.15M4 20q-.425 0-.712-.288T3 19t.288-.712T4 18h10q.425 0 .713.288T15 19t-.288.713T14 20zm8.463-8.462Q11 10.075 11 8t1.463-3.537T16 3t3.538 1.463T21 8t-1.463 3.538T16 13t-3.537-1.463M4 12q-.425 0-.712-.288T3 11t.288-.712T4 10h4.675q.425 0 .713.288t.287.712q0 .4-.288.7t-.712.3zm0 4q-.425 0-.712-.288T3 15t.288-.712T4 14h7.925q.425 0 .713.288t.287.712q0 .4-.275.7t-.725.3z");
}
</style><path class="busjusb2z"/>`,
		"fallback": "material-symbols:data-alert-outline-rounded",
	});
}

export default Component;
