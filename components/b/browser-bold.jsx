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
		"content": `<style>.gvkpqdyaj {
  fill: currentColor;
  d: path("M216 36H40a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-4 24v24H44V60ZM44 196v-88h168v88Z");
}
</style><path class="gvkpqdyaj"/>`,
		"fallback": "ph:browser-bold",
	});
}

export default Component;
