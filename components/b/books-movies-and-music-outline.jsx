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
		"content": `<style>.kx0allbfs {
  fill: currentColor;
  d: path("M4 22q-.425 0-.712-.288T3 21V7.05q0-.375.15-.637T3.65 6l10-4q.5-.2.925.138T15 3v3h1q.425 0 .713.288T17 7v3h-2V8H5v12h5.175l2 2zM9 6h4V4.45zm4.463 14.538Q12 19.075 12 17t1.463-3.537T17 12t3.538 1.463T22 17t-1.463 3.538T17 22t-3.537-1.463M15.75 19.5l4-2.5l-4-2.5zM5 20V8z");
}
</style><path class="kx0allbfs"/>`,
		"fallback": "material-symbols:books-movies-and-music-outline",
	});
}

export default Component;
