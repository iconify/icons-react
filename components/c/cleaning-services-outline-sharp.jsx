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
		"content": `<style>.ath5kzl5h {
  fill: currentColor;
  d: path("M3 23V11h6V1h6v10h6v12zm2-2h2v-4h2v4h2v-4h2v4h2v-4h2v4h2v-8H5zm8-10V3h-2v8zm0 0h-2z");
}
</style><path class="ath5kzl5h"/>`,
		"fallback": "material-symbols:cleaning-services-outline-sharp",
	});
}

export default Component;
