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
		"content": `<style>.rmmm8q1xw {
  fill: currentColor;
  d: path("M5 22q-.825 0-1.412-.587T3 20V7.625Q3 7 3.338 6.488t.912-.738l8-3.2q1-.4 1.875.2T15 4.425V6q.825 0 1.413.588T17 8v2q-2.925 0-4.962 2.038T10 17q0 1.425.55 2.725T12.125 22zM9 6h4V4.45zm4.463 14.538Q12 19.075 12 17t1.463-3.537T17 12t3.538 1.463T22 17t-1.463 3.538T17 22t-3.537-1.463m3.062-1.512l2.55-1.6q.25-.15.25-.425t-.25-.425l-2.55-1.6q-.25-.15-.512-.012t-.263.437v3.2q0 .3.263.438t.512-.013");
}
</style><path class="rmmm8q1xw"/>`,
		"fallback": "material-symbols:books-movies-and-music-rounded",
	});
}

export default Component;
