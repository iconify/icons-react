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
		"content": `<style>.t4vrjsbgu {
  fill: currentColor;
  d: path("M10 3v1.97l7 5V11h2v2h-2v2h2v2h-2v4h6V3zm9 6h-2V7h2z");
}

.tnhu26bxu {
  fill: currentColor;
  d: path("M1 11v10h5v-6h4v6h5V11L8 6z");
}
</style><path class="tnhu26bxu"/><path class="t4vrjsbgu"/>`,
		"fallback": "ic:baseline-maps-home-work",
	});
}

export default Component;
