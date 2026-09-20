import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dytntqbyk {
  fill: var(--svg-color--55acee, #55acee);
  d: path("M10 20h16v4H10zm0-6h16v4H10zm0 12h16v4H10z");
}

.fqtfekbla {
  fill: var(--svg-color--99aab5, #99aab5);
  d: path("M34 7H2a2 2 0 0 0-2 2h36a2 2 0 0 0-2-2");
}

.i263_-b3o {
  fill: var(--svg-color--3b88c3, #3b88c3);
  d: path("M13 32h10v4H13z");
}

.lo9_tkfev {
  fill: var(--svg-color--55acee, #55acee);
  d: path("M34 24H2v4h32z");
}

.pcamm1b_y {
  fill: var(--svg-color--ccd6dd, #ccd6dd);
  d: path("M0 9v25a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V9z");
}

.q_biqku9k {
  fill: var(--svg-color--99aab5, #99aab5);
  d: path("M26 0H10a2 2 0 0 0-2 2h20a2 2 0 0 0-2-2");
}

.qlz9tn_2r {
  fill: var(--svg-color--e1e8ed, #e1e8ed);
  d: path("M8 2h20v34H8z");
}

.s-_y3bvtm {
  fill: var(--svg-color--dd2e44, #dd2e44);
  d: path("M22 6.5v3h-2.5V12h-3V9.5H14v-3h2.5V4h3v2.5zm-4.5 1H15v1h2.5V11h1V8.5H21v-1h-2.5V5h-1z");
}

.uf_s2ow1c {
  fill: var(--svg-color--55acee, #55acee);
  d: path("M2 18h32v4H2zm0-6h32v4H2zm0 12h32v4H2z");
}
</style><path class="pcamm1b_y"/><path class="fqtfekbla"/><path class="uf_s2ow1c"/><path class="lo9_tkfev"/><path class="qlz9tn_2r"/><path class="dytntqbyk"/><path class="i263_-b3o"/><path class="s-_y3bvtm"/><path class="q_biqku9k"/>`,
		"fallback": "twemoji:hospital",
	});
}

export default Component;
