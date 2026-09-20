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
		"content": `<style>.dac8vpb2t {
  fill: currentColor;
  d: path("M7 3a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM4.5 17a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1z");
}
</style><path class="dac8vpb2t"/>`,
		"fallback": "fluent:app-title-20-filled",
	});
}

export default Component;
