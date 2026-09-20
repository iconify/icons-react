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
		"content": `<style>.xfd-n5unw {
  fill: currentColor;
  d: path("M16 19v-4.808h3V19zm-5.5 0V5h3v14zM5 19V9.808h3V19z");
}
</style><path class="xfd-n5unw"/>`,
		"fallback": "material-symbols-light:bar-chart-sharp",
	});
}

export default Component;
