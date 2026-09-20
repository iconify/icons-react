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
		"content": `<style>.d9z52k1-g {
  fill: currentColor;
  d: path("M5 22q-.825 0-1.412-.587T3 20V7.625Q3 7 3.338 6.488t.912-.738l8-3.2q1-.4 1.875.2T15 4.425V6q.825 0 1.413.588T17 8v1q0 .425-.288.713T16 10t-.712-.288T15 9V8H5v12h4.175q.425 0 .713.288t.287.712t-.288.713t-.712.287zM9 6h4V4.45zm4.463 14.538Q12 19.075 12 17t1.463-3.537T17 12t3.538 1.463T22 17t-1.463 3.538T17 22t-3.537-1.463m3.062-1.512l2.55-1.6q.25-.15.25-.425t-.25-.425l-2.55-1.6q-.25-.15-.512-.012t-.263.437v3.2q0 .3.263.438t.512-.013M5 20V8z");
}
</style><path class="d9z52k1-g"/>`,
		"fallback": "material-symbols:books-movies-and-music-outline-rounded",
	});
}

export default Component;
