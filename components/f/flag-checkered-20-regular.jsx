import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bfu25bbpn {
  fill: currentColor;
  d: path("M5 3.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6v3.5a.5.5 0 0 1-1 0zM6 13h3v-3h3v3h3v-3h-3V7h3V4h-3v3H9V4H6v3h3v3H6z");
}
</style><path class="bfu25bbpn"/>`,
		"fallback": "fluent:flag-checkered-20-regular",
	});
}

export default Component;
