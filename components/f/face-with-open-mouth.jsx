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
		"content": `<style>.dy9u4yopw {
  cx: 32px;
  cy: 45.1px;
  r: 7px;
}

.fbp0m0b1e {
  fill: var(--svg-color--664e27, #664e27);
}

.rhvdvboaq {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--ffdd67, #ffdd67);
}

.rl0d2sb8f {
  cx: 42.7px;
  cy: 25px;
  r: 4.5px;
}

.zne7fwbye {
  cx: 20.2px;
  cy: 25px;
  r: 4.5px;
}
</style><circle class="rhvdvboaq"/><g class="fbp0m0b1e"><circle class="dy9u4yopw"/><circle class="zne7fwbye"/><circle class="rl0d2sb8f"/></g>`,
		"fallback": "emojione:face-with-open-mouth",
	});
}

export default Component;
