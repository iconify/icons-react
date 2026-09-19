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
		"content": `<style>.cuyyezbxs {
  d: path("M37 42.4H27L23 2h18z");
}

.ic-371bqb {
  fill: var(--svg-color--ff5a79, #ff5a79);
}

.o-hj8qbbo {
  cx: 32px;
  cy: 54.4px;
  rx: 7.7px;
  ry: 7.6px;
}
</style><g class="ic-371bqb"><path class="cuyyezbxs"/><ellipse class="o-hj8qbbo"/></g>`,
		"fallback": "emojione:exclamation-mark",
	});
}

export default Component;
