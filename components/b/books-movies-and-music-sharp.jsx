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
		"content": `<style>.ujf4ovmcs {
  fill: currentColor;
  d: path("M3 22V6.25l12-4.8V6h2v4q-2.925 0-4.962 2.038T10 17q0 1.425.55 2.725T12.125 22zM9 6h4V4.45zm4.463 14.538Q12 19.075 12 17t1.463-3.537T17 12t3.538 1.463T22 17t-1.463 3.538T17 22t-3.537-1.463M15.75 19.5l4-2.5l-4-2.5z");
}
</style><path class="ujf4ovmcs"/>`,
		"fallback": "material-symbols:books-movies-and-music-sharp",
	});
}

export default Component;
