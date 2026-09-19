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
		"content": `<style>.djvj59_xy {
  cx: 20.5px;
  cy: 28.5px;
  r: 5px;
}

.fbp0m0b1e {
  fill: var(--svg-color--664e27, #664e27);
}

.pchx_i0bq {
  cx: 43.5px;
  cy: 28.5px;
  r: 5px;
}

.rhvdvboaq {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--ffdd67, #ffdd67);
}
</style><circle class="rhvdvboaq"/><g class="fbp0m0b1e"><circle class="djvj59_xy"/><circle class="pchx_i0bq"/></g>`,
		"fallback": "emojione:face-without-mouth",
	});
}

export default Component;
