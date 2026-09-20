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
		"content": `<style>.umyjqucwh {
  fill: currentColor;
  d: path("M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m-13.52 88L134 61.52V46h15.52L210 106.48V122ZM134 78.48L177.52 122H134ZM210 48v41.52L166.48 46H208a2 2 0 0 1 2 2M48 46h74v76H46V48a2 2 0 0 1 2-2m58.48 164L46 149.52V134h15.52L122 194.48V210ZM122 177.52L78.48 134H122ZM46 208v-41.52L89.52 210H48a2 2 0 0 1-2-2m162 2h-74v-76h76v74a2 2 0 0 1-2 2");
}
</style><path class="umyjqucwh"/>`,
		"fallback": "ph:checkerboard-light",
	});
}

export default Component;
