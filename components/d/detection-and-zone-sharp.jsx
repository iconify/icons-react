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
		"content": `<style>.itp2ksb_k {
  fill: currentColor;
  d: path("M3 7V3h4v1H4v3zm0 14v-4h1v3h3v1zm14 0v-1h3v-3h1v4zm3-14V4h-3V3h4v4zm-7.701 1.701q-.491-.492-.491-1.201t.491-1.201q.492-.491 1.201-.491t1.201.491q.491.491.491 1.201t-.491 1.201t-1.201.491t-1.201-.491m-2.883 8.683l1.038-5.33L7.5 13.273V16.5h-1v-3.892l3.989-1.662q.644-.26.95-.353T12 10.5q.39 0 .725.208t.552.561l1 1.6q.63 1.012 1.743 1.745t2.48.848v1q-1.4-.096-2.809-.88q-1.408-.784-2.441-2.447l-.835 4.25z");
}
</style><path class="itp2ksb_k"/>`,
		"fallback": "material-symbols-light:detection-and-zone-sharp",
	});
}

export default Component;
