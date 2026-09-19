import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.nan1l1r5l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.47 35.19c0 3.21-3.24 8.31-11.36 8.31S11.53 38 11.53 32.41c0-7.54 8.07-9.3 8.07-9.3s-6.45-2.88-6.45-8.44s3.9-10.17 12-10.17S35.3 7.83 35.3 11.09M19.6 23.11h9.36");
}
</style><path class="nan1l1r5l"/>`,
		"fallback": "arcticons:exodusprivacy",
	});
}

export default Component;
