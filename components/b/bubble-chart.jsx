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
		"content": `<style>.chmopnomt {
  cx: 15.2px;
  cy: 8.8px;
  r: 4.8px;
  fill: currentColor;
}

.cjb7gmbqn {
  cx: 14.8px;
  cy: 18px;
  r: 2px;
  fill: currentColor;
}

.f1yfyy14d {
  cx: 7.2px;
  cy: 14.4px;
  r: 3.2px;
  fill: currentColor;
}
</style><circle class="f1yfyy14d"/><circle class="cjb7gmbqn"/><circle class="chmopnomt"/>`,
		"fallback": "ic:bubble-chart",
	});
}

export default Component;
