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
		"content": `<style>.q5ve4d-fq {
  fill: currentColor;
  d: path("M5 4v6.025V10v10zv5zM3 22V2h10l6 6v2.5q-.475-.2-.975-.312T17 10.025V9h-5V4H5v16h6.025q.4.6.9 1.113t1.1.887zm15.275-3.725Q19 17.55 19 16.5t-.725-1.775T16.5 14t-1.775.725T14 16.5t.725 1.775T16.5 19t1.775-.725M21.6 23l-2.7-2.7q-.525.35-1.137.525T16.5 21q-1.875 0-3.187-1.312T12 16.5t1.313-3.187T16.5 12t3.188 1.313T21 16.5q0 .65-.175 1.263T20.3 18.9l2.7 2.7z");
}
</style><path class="q5ve4d-fq"/>`,
		"fallback": "material-symbols:document-search-outline-sharp",
	});
}

export default Component;
