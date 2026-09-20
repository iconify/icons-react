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
		"content": `<style>.pdsh54kxh {
  fill: currentColor;
  d: path("M6 16h8v-3.2l4 3.2V8l-4 3.2V8H6zm-4 4V4h20v16zm2-2h16V6H4zM4 6v12z");
}
</style><path class="pdsh54kxh"/>`,
		"fallback": "material-symbols:hangout-video-outline-sharp",
	});
}

export default Component;
