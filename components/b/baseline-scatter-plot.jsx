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
		"content": `<style>.ap76noi5m {
  cx: 11px;
  cy: 6px;
  r: 3px;
  fill: currentColor;
}

.sjg9j274c {
  cx: 16.6px;
  cy: 17.6px;
  r: 3px;
  fill: currentColor;
}

.yg3x3ublv {
  cx: 7px;
  cy: 14px;
  r: 3px;
  fill: currentColor;
}
</style><circle class="yg3x3ublv"/><circle class="ap76noi5m"/><circle class="sjg9j274c"/>`,
		"fallback": "ic:baseline-scatter-plot",
	});
}

export default Component;
