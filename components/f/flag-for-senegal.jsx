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
		"content": `<style>.gw0wuib2p {
  fill: var(--svg-color--699635, #699635);
  d: path("M2 32c0 13.1 8.4 24.2 20 28.3V3.7C10.4 7.8 2 18.9 2 32");
}

.recgh1bvq {
  fill: var(--svg-color--ed4c5c, #ed4c5c);
  d: path("M62 32c0-13.1-8.3-24.2-20-28.3v56.6C53.7 56.2 62 45.1 62 32");
}

.sxy5v5bhg {
  fill: var(--svg-color--ffe62e, #ffe62e);
  d: path("M42 3.7C38.9 2.6 35.5 2 32 2s-6.9.6-10 1.7v56.6c3.1 1.1 6.5 1.7 10 1.7s6.9-.6 10-1.7z");
}

.v_8h80bhc {
  fill: var(--svg-color--699635, #699635);
  d: path("m32 36.2l5.3 3.8l-2-6.1l5.2-3.8H34L32 24l-2 6.1h-6.5l5.2 3.8l-2 6.1z");
}
</style><path class="recgh1bvq"/><path class="gw0wuib2p"/><path class="sxy5v5bhg"/><path class="v_8h80bhc"/>`,
		"fallback": "emojione:flag-for-senegal",
	});
}

export default Component;
