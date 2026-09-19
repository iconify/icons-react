import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.b-sxirohb {
  cx: 32px;
  cy: 54.5px;
  r: 7.5px;
  fill: currentColor;
}

.qgie5perq {
  cx: 32px;
  cy: 9.5px;
  r: 7.5px;
  fill: currentColor;
}

.x2xu2umfc {
  fill: currentColor;
  d: path("M2 26h60v12H2z");
}
</style><path class="x2xu2umfc"/><circle class="qgie5perq"/><circle class="b-sxirohb"/>`,
		"fallback": "emojione-monotone:heavy-division-sign",
	});
}

export default Component;
