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
		"content": `<style>.fsd0axbji {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.15 24.053a9.563 9.563 0 0 1 4.218-12.356m4.53 24.678V43.4m-8.788.1h17.374");
}

.niddxibvm {
  cx: 24px;
  cy: 20.438px;
  r: 15.938px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="niddxibvm"/><path class="fsd0axbji"/>`,
		"fallback": "arcticons:huawei-mirror",
	});
}

export default Component;
