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
		"content": `<style>.xf7o9rbee {
  fill: currentColor;
  d: path("M3 15V9h1.5v2h1V9H7v6H5.5v-2.5h-1V15zm5 0V9h3.5v1.5h-2v.5h2v1.5h-2v1h2V15zm5 0l-1-6h1.5l.75 4.5L15 9h1.5l-1 6zm4 0V9h4v2h-1.5v-.5h-1v3h1V13H21v2z");
}
</style><path class="xf7o9rbee"/>`,
		"fallback": "material-symbols:hevc-outline-sharp",
	});
}

export default Component;
