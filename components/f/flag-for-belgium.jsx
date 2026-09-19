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
		"content": `<style>.nuhoclbkq {
  fill: var(--svg-color--3e4347, #3e4347);
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
</style><path class="recgh1bvq"/><path class="nuhoclbkq"/><path class="sxy5v5bhg"/>`,
		"fallback": "emojione:flag-for-belgium",
	});
}

export default Component;
