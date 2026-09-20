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
		"content": `<style>.hk3k08lyr {
  fill: currentColor;
  d: path("M7.46 13.655q-.23-.23-.23-.54t.23-.539t.54-.23t.54.23t.23.54t-.23.539t-.54.23t-.54-.23m4 0q-.23-.23-.23-.54t.23-.539t.54-.23t.54.23t.23.54t-.23.539t-.54.23t-.54-.23m4 0q-.23-.23-.23-.54t.23-.539t.54-.23t.54.23t.23.54t-.23.539t-.54.23t-.54-.23M4 21V5h3.385V2.77h1.077V5h7.154V2.77h1V5H20v16zm1-1h14v-9.384H5z");
}
</style><path class="hk3k08lyr"/>`,
		"fallback": "material-symbols-light:date-range-sharp",
	});
}

export default Component;
