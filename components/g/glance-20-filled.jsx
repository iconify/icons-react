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
		"content": `<style>.qrlivacqq {
  fill: currentColor;
  d: path("M3 14.5v1A1.5 1.5 0 0 0 4.5 17h3A1.5 1.5 0 0 0 9 15.5v-1A1.5 1.5 0 0 0 7.5 13h-3A1.5 1.5 0 0 0 3 14.5m0-10v5A1.5 1.5 0 0 0 4.5 11h3A1.5 1.5 0 0 0 9 9.5v-5A1.5 1.5 0 0 0 7.5 3h-3A1.5 1.5 0 0 0 3 4.5m8 0v1A1.5 1.5 0 0 0 12.5 7h3A1.5 1.5 0 0 0 17 5.5v-1A1.5 1.5 0 0 0 15.5 3h-3A1.5 1.5 0 0 0 11 4.5M12.5 9a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 15.5 9z");
}
</style><path class="qrlivacqq"/>`,
		"fallback": "fluent:glance-20-filled",
	});
}

export default Component;
