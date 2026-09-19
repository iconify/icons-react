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
		"content": `<style>.sa5ig64mk {
  cx: 24.437px;
  cy: 39.265px;
  r: 4.235px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.xxddkztie {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.804 24.311a4.235 4.235 0 1 1-4.235-7.334L32.196 5.068a4.235 4.235 0 1 1 4.235 7.334zm5.376 9.311a4.235 4.235 0 1 1-4.235-7.335l10.229-5.906a4.235 4.235 0 1 1 4.235 7.335z");
}
</style><path class="xxddkztie"/><circle class="sa5ig64mk"/>`,
		"fallback": "arcticons:flclash",
	});
}

export default Component;
