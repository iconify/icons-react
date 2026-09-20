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
		"content": `<style>.nizyw41gr {
  fill: currentColor;
  d: path("M2 18V5h1v9h8.5V7H22v11h-1v-3H3v3zm3.5-6.5q-.615-.615-.615-1.5T5.5 8.5T7 7.885t1.5.615t.616 1.5t-.616 1.5t-1.5.616t-1.5-.616m2.29-.71q.326-.326.326-.79t-.326-.79T7 8.886t-.79.326t-.325.789t.326.79t.789.326t.79-.326m-1.58 0q-.325-.326-.325-.79t.326-.79T7 8.886t.79.326t.326.789t-.326.79t-.79.326t-.79-.326");
}
</style><path class="nizyw41gr"/>`,
		"fallback": "material-symbols-light:hotel-sharp",
	});
}

export default Component;
