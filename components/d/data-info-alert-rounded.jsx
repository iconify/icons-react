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
		"content": `<style>.kkf3h5klh {
  fill: currentColor;
  d: path("M4 20q-.425 0-.712-.288T3 19t.288-.712T4 18h10q.425 0 .713.288T15 19t-.288.713T14 20zm8.463-8.462Q11 10.075 11 8t1.463-3.537T16 3t3.538 1.463T21 8t-1.463 3.538T16 13t-3.537-1.463M4 12q-.425 0-.712-.288T3 11t.288-.712T4 10h4.675q.425 0 .713.288t.287.712q0 .4-.288.7t-.712.3zm0 4q-.425 0-.712-.288T3 15t.288-.712T4 14h7.925q.425 0 .713.288t.287.712q0 .4-.275.7t-.725.3zm12.35-5.15q.15-.15.15-.35v-3q0-.2-.15-.35T16 7t-.35.15t-.15.35v3q0 .2.15.35T16 11t.35-.15m0-5q.15-.15.15-.35t-.15-.35T16 5t-.35.15t-.15.35t.15.35T16 6t.35-.15");
}
</style><path class="kkf3h5klh"/>`,
		"fallback": "material-symbols:data-info-alert-rounded",
	});
}

export default Component;
