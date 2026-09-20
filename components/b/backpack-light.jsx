import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.pzop_cvqa {
  fill: currentColor;
  d: path("M166 42.34V32a22 22 0 0 0-22-22h-32a22 22 0 0 0-22 22v10.34A54.07 54.07 0 0 0 42 96v120a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V96a54.07 54.07 0 0 0-48-53.66M112 22h32a10 10 0 0 1 10 10v10h-52V32a10 10 0 0 1 10-10m58 140H86v-10a10 10 0 0 1 10-10h64a10 10 0 0 1 10 10Zm-84 12h52v10a6 6 0 0 0 12 0v-10h20v44H86Zm116 42a2 2 0 0 1-2 2h-18v-66a22 22 0 0 0-22-22H96a22 22 0 0 0-22 22v66H56a2 2 0 0 1-2-2V96a42 42 0 0 1 42-42h64a42 42 0 0 1 42 42ZM150 88a6 6 0 0 1-6 6h-32a6 6 0 0 1 0-12h32a6 6 0 0 1 6 6");
}
</style><path class="pzop_cvqa"/>`,
		"fallback": "ph:backpack-light",
	});
}

export default Component;
