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
		"content": `<style>.riz4q0f4a {
  fill: currentColor;
  d: path("M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7m4 8h-3v3h-2v-3H8V8h3V5h2v3h3z");
}
</style><path class="riz4q0f4a"/>`,
		"fallback": "ic:baseline-add-location",
	});
}

export default Component;
