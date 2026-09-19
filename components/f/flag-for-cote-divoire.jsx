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
		"content": `<style>.at11-3bve {
  fill: var(--svg-color--f2b200, #f2b200);
  d: path("M2 32c0 13.1 8.4 24.2 20 28.3V3.7C10.4 7.8 2 18.9 2 32");
}

.fi78vq6nn {
  fill: var(--svg-color--f9f9f9, #f9f9f9);
  d: path("M22 60.3c3.1 1.1 6.5 1.7 10 1.7s6.9-.6 10-1.7V3.7C38.9 2.6 35.5 2 32 2s-6.9.6-10 1.7z");
}

.umjzfdcqs {
  fill: var(--svg-color--83bf4f, #83bf4f);
  d: path("M62 32c0-13.1-8.3-24.2-20-28.3v56.6C53.7 56.2 62 45.1 62 32");
}
</style><path class="at11-3bve"/><path class="umjzfdcqs"/><path class="fi78vq6nn"/>`,
		"fallback": "emojione:flag-for-cote-divoire",
	});
}

export default Component;
