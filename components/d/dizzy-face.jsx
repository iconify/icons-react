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
		"content": `<style>.d84rfeb9f {
  d: path("M28.6 19.8L16.5 32c-.8.8-3.6-2-2.8-2.8L25.9 17c.7-.7 3.5 2.1 2.7 2.8");
}

.dm1_cuq3h {
  d: path("M47.5 32L35.4 19.8c-.8-.8 2-3.6 2.8-2.8l12.2 12.2c.7.8-2.1 3.6-2.9 2.8");
}

.ewhhq8b1m {
  fill: var(--svg-color--fff, #fff);
  d: path("M26 44c1.2-2.4 3.4-4 6-4s4.8 1.6 6 4z");
}

.fbp0m0b1e {
  fill: var(--svg-color--664e27, #664e27);
}

.i4hzrmuxh {
  d: path("M25.8 32L13.7 19.8c-.8-.8 2-3.6 2.8-2.8l12.2 12.2c.7.8-2.1 3.6-2.9 2.8m24.5-12.2L38.2 32c-.8.8-3.6-2-2.8-2.8L47.6 17c.7-.7 3.5 2.1 2.7 2.8");
}

.rhvdvboaq {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--ffdd67, #ffdd67);
}

.x8_tdd6ju {
  cx: 32px;
  cy: 47px;
  r: 9px;
}
</style><circle class="rhvdvboaq"/><g class="fbp0m0b1e"><path class="d84rfeb9f"/><path class="i4hzrmuxh"/><path class="dm1_cuq3h"/><circle class="x8_tdd6ju"/></g><path class="ewhhq8b1m"/>`,
		"fallback": "emojione:dizzy-face",
	});
}

export default Component;
