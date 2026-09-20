import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.woef9mb5x {
  fill: currentColor;
  d: path("M4.5 3A1.5 1.5 0 0 0 3 4.5a.5.5 0 0 1-1 0A2.5 2.5 0 0 1 4.5 2a.5.5 0 0 1 0 1M3 11.5a.5.5 0 0 0-1 0A2.5 2.5 0 0 0 4.5 14a.5.5 0 0 0 0-1A1.5 1.5 0 0 1 3 11.5m10.5-.5a.5.5 0 0 1 .5.5a2.5 2.5 0 0 1-2.5 2.5a.5.5 0 0 1 0-1a1.5 1.5 0 0 0 1.5-1.5a.5.5 0 0 1 .5-.5m-2-9a.5.5 0 0 0 0 1A1.5 1.5 0 0 1 13 4.5a.5.5 0 0 0 1 0A2.5 2.5 0 0 0 11.5 2m-5 .5A.5.5 0 0 1 7 2h2a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5M2 9a.5.5 0 0 0 1 0V7a.5.5 0 0 0-1 0zm4.5 4.5A.5.5 0 0 1 7 13h2a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5M13 9a.5.5 0 0 0 1 0V7a.5.5 0 0 0-1 0z");
}
</style><path class="woef9mb5x"/>`,
		"fallback": "fluent:border-none-16-regular",
	});
}

export default Component;
