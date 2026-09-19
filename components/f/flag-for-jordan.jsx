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
		"content": `<style>.ayditlbgy {
  fill: var(--svg-color--f9f9f9, #f9f9f9);
  d: path("M60.3 22H8v20h52.3c1.1-3.1 1.7-6.5 1.7-10s-.6-6.9-1.7-10");
}

.c1cns0iog {
  fill: var(--svg-color--fff, #fff);
  d: path("m11 29.7l1-2.7l1 2.7l2.5-1.2l-1.2 2.5l2.7 1l-2.7 1l1.2 2.5l-2.5-1.2l-1 2.7l-1-2.7l-2.5 1.2L9.7 33L7 32l2.7-1l-1.2-2.5z");
}

.ener-1k4e {
  fill: var(--svg-color--75a843, #75a843);
  d: path("M8 42v8c5.5 7.3 14.2 12 24 12c13.1 0 24.2-8.3 28.3-20z");
}

.gtxdulliu {
  fill: var(--svg-color--3e4347, #3e4347);
  d: path("M8 22h52.3C56.2 10.4 45.1 2 32 2C22.2 2 13.5 6.7 8 14z");
}

.tl6wogblm {
  fill: var(--svg-color--c94747, #c94747);
  d: path("M8 14c-3.8 5-6 11.2-6 18s2.2 13 6 18l24-18z");
}
</style><path class="gtxdulliu"/><path class="ayditlbgy"/><path class="ener-1k4e"/><path class="tl6wogblm"/><path class="c1cns0iog"/>`,
		"fallback": "emojione:flag-for-jordan",
	});
}

export default Component;
