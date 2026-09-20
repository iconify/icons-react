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
		"content": `<style>.o4c9_xyil {
  fill: currentColor;
  d: path("M92 8a4 4 0 0 1 4-4h64a4 4 0 0 1 0 8H96a4 4 0 0 1-4-4m104 48v168a20 20 0 0 1-20 20H80a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h96a20 20 0 0 1 20 20m-8 0a12 12 0 0 0-12-12H80a12 12 0 0 0-12 12v168a12 12 0 0 0 12 12h96a12 12 0 0 0 12-12Zm-32 80h-24v-24a4 4 0 0 0-8 0v24h-24a4 4 0 0 0 0 8h24v24a4 4 0 0 0 8 0v-24h24a4 4 0 0 0 0-8");
}
</style><path class="o4c9_xyil"/>`,
		"fallback": "ph:battery-plus-vertical-thin",
	});
}

export default Component;
