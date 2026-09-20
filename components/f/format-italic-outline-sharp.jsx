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
		"content": `<style>.my6nazbxk {
  fill: currentColor;
  d: path("M5.789 18.25v-1.115h3.634l3.48-10.27H9.27V5.75h8.308v1.116h-3.52l-3.48 10.269h3.52v1.115z");
}
</style><path class="my6nazbxk"/>`,
		"fallback": "material-symbols-light:format-italic-outline-sharp",
	});
}

export default Component;
