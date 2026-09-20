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
		"content": `<style>.ztdk8i0xj {
  fill: currentColor;
  d: path("M5 19v-5.808h3V19zm5.5 0V5h3v14zm5.5 0V9.808h3V19z");
}
</style><path class="ztdk8i0xj"/>`,
		"fallback": "material-symbols-light:equalizer-sharp",
	});
}

export default Component;
