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
		"content": `<style>.uc-m8cerw {
  fill: currentColor;
  d: path("M4 22q-.425 0-.712-.288T3 21V7.05q0-.35.175-.637T3.65 6l10-4q.5-.2.925.125T15 3v3h1q.425 0 .713.288T17 7v3q-2.925 0-4.962 2.038T10 17q0 1.425.55 2.725T12.125 22zM9 6h4V4.45zm4.463 14.538Q12 19.075 12 17t1.463-3.537T17 12t3.538 1.463T22 17t-1.463 3.538T17 22t-3.537-1.463M15.75 19.5l4-2.5l-4-2.5z");
}
</style><path class="uc-m8cerw"/>`,
		"fallback": "material-symbols:books-movies-and-music",
	});
}

export default Component;
