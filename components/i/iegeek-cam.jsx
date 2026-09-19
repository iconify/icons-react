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
		"content": `<style>.qdq_k38dz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 24.48L24 8.621L42.5 24.48");
}

.rm10n1bpb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.254 19.548v7.574c0 6.769 5.706 12.256 12.746 12.256s12.746-5.487 12.746-12.256H24");
}
</style><path class="rm10n1bpb"/><path class="qdq_k38dz"/>`,
		"fallback": "arcticons:iegeek-cam",
	});
}

export default Component;
