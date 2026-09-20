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
		"content": `<style>.kka8s-xby {
  fill: currentColor;
  d: path("M216 216h-16V115.31L211.31 104A15.86 15.86 0 0 0 216 92.69V48a16 16 0 0 0-16-16h-20a8 8 0 0 0-8 8v24h-24V40a8 8 0 0 0-8-8h-24a8 8 0 0 0-8 8v24H84V40a8 8 0 0 0-8-8H56a16 16 0 0 0-16 16v44.69A15.86 15.86 0 0 0 44.69 104L56 115.31V216H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16m-104-48a16 16 0 0 1 32 0v48h-32Z");
}
</style><path class="kka8s-xby"/>`,
		"fallback": "ph:castle-turret-fill",
	});
}

export default Component;
