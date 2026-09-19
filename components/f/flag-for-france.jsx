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
		"content": `<style>.joi4eibld {
  fill: var(--svg-color--fff, #fff);
  d: path("M21.9 60.3c3.1 1.1 6.5 1.7 10 1.7s6.9-.6 10-1.7V3.7C38.8 2.6 35.5 2 31.9 2s-6.9.6-10 1.7z");
}

.oq5v28vzb {
  fill: var(--svg-color--428bc1, #428bc1);
  d: path("M1.9 32c0 13.1 8.4 24.2 20 28.3V3.7C10.3 7.8 1.9 18.9 1.9 32");
}

.r7or8xboa {
  fill: var(--svg-color--ed4c5c, #ed4c5c);
  d: path("M61.9 32c0-13.1-8.3-24.2-20-28.3v56.6c11.7-4.1 20-15.2 20-28.3");
}
</style><path class="oq5v28vzb"/><path class="r7or8xboa"/><path class="joi4eibld"/>`,
		"fallback": "emojione:flag-for-france",
	});
}

export default Component;
