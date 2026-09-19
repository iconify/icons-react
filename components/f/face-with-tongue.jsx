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
		"content": `<style>.ddkhdwi3r {
  fill: var(--svg-color--fff, #fff);
  d: path("M28.16 23.456c0 5.313-2.871 9.613-6.417 9.613s-6.421-4.299-6.421-9.613c0-5.31 2.875-9.612 6.421-9.612s6.417 4.302 6.417 9.612");
}

.n3s14ibaj {
  fill: var(--svg-color--633d19, #633d19);
  d: path("M52.957 36.767c0 11.04-9.176 20-20.483 20c-11.298 0-20.474-8.959-20.474-20");
}

.qtvos2ove {
  cx: 21.742px;
  cy: 23.456px;
  fill: var(--svg-color--25333a, #25333a);
  rx: 4.155px;
  ry: 5.04px;
}

.ry-o7td7d {
  fill: var(--svg-color--fff, #fff);
  d: path("M48.52 23.456c0 5.313-2.871 9.613-6.418 9.613c-3.546 0-6.421-4.299-6.421-9.613c0-5.31 2.875-9.612 6.421-9.612s6.418 4.302 6.418 9.612");
}

.s_r783bey {
  cx: 31.86px;
  cy: 29.861px;
  r: 29.86px;
  fill: var(--svg-color--fbbf67, #fbbf67);
}

.s153wxbsn {
  cx: 42.1px;
  cy: 23.456px;
  fill: var(--svg-color--25333a, #25333a);
  rx: 4.155px;
  ry: 5.04px;
}

.ul5pyxb1t {
  fill: var(--svg-color--f45ba1, #f45ba1);
  d: path("M42.652 56.08c0 4.055-4.574 7.342-10.218 7.342c-5.641 0-10.215-3.287-10.215-7.342l2.202-8.468c0-4.053 2.372-7.34 8.01-7.34c5.644 0 8.02 3.287 8.02 7.34l2.203 8.468");
}

.yr3oaitoz {
  fill: var(--svg-color--fff, #fff);
  d: path("M50.27 37.896c0 3.739-7.987 6.772-17.834 6.772c-9.842 0-17.83-3.03-17.83-6.772");
}
</style><circle class="s_r783bey"/><path class="ddkhdwi3r"/><ellipse class="qtvos2ove"/><path class="ry-o7td7d"/><ellipse class="s153wxbsn"/><path class="n3s14ibaj"/><path class="ul5pyxb1t"/><path class="yr3oaitoz"/>`,
		"fallback": "emojione-v1:face-with-tongue",
	});
}

export default Component;
