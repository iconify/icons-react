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
		"content": `<style>.e7tszgt2g {
  cx: 13.2px;
  cy: 32px;
  r: 7.5px;
  fill: var(--svg-color--ed4c5c, #ed4c5c);
}

.mq-ay4bjg {
  cx: 32px;
  cy: 32px;
  r: 7.5px;
  fill: var(--svg-color--ffe62e, #ffe62e);
}

.ow3h64bin {
  cx: 50.8px;
  cy: 32px;
  r: 7.5px;
  fill: var(--svg-color--83bf4f, #83bf4f);
}

.u30e_6b6s {
  fill: var(--svg-color--3e4347, #3e4347);
  d: path("M3.9 32c0 7.2 5.9 13.1 13.1 13.1h30c7.2 0 13.1-5.9 13.1-13.1S54.2 18.9 47 18.9H17C9.8 18.9 3.9 24.8 3.9 32");
}

.xelbxi65z {
  fill: var(--svg-color--94989b, #94989b);
  d: path("M2 32c0 8.2 6.8 15 15 15h30c8.3 0 15-6.8 15-15s-6.7-15-15-15H17C8.8 17 2 23.8 2 32");
}
</style><path class="xelbxi65z"/><path class="u30e_6b6s"/><circle class="mq-ay4bjg"/><circle class="e7tszgt2g"/><circle class="ow3h64bin"/>`,
		"fallback": "emojione:horizontal-traffic-light",
	});
}

export default Component;
