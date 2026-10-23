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
		"content": `<style>.x-klcppza {
  fill: currentColor;
  d: path("M12 23.3L8.65 20H4v-4.65L.7 12L4 8.65V4h4.65L12 .7L15.35 4H20v4.65L23.3 12L20 15.35V20h-4.65zm0-6.3q2.075 0 3.538-1.463T17 12t-1.463-3.537T12 7z");
}
</style><path class="x-klcppza"/>`,
		"fallback": "material-symbols:brightness-medium-sharp",
	});
}

export default Component;
