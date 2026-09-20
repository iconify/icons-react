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
		"content": `<style>.e1_kprigi {
  fill: currentColor;
  d: path("M2 19V5h20v14zm3.5-1h13V6h-13zm3-6.808v-.884h7v.884zm1 3v-.884h5v.884z");
}
</style><path class="e1_kprigi"/>`,
		"fallback": "material-symbols-light:aod-tablet-sharp",
	});
}

export default Component;
