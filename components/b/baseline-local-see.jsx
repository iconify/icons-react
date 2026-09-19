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
		"content": `<style>.eyxzjrb5l {
  cx: 12px;
  cy: 12px;
  r: 3.2px;
  fill: currentColor;
}

.jgjerbb9n {
  fill: currentColor;
  d: path("M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5");
}
</style><circle class="eyxzjrb5l"/><path class="jgjerbb9n"/>`,
		"fallback": "ic:baseline-local-see",
	});
}

export default Component;
