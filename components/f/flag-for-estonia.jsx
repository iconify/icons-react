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
		"content": `<style>.fkagtxbpe {
  fill: var(--svg-color--eee, #eee);
  d: path("M32 31H4a4 4 0 0 1-4-4v-4h36v4a4 4 0 0 1-4 4");
}

.ko78l5bky {
  fill: var(--svg-color--4891d9, #4891d9);
  d: path("M32 5H4a4 4 0 0 0-4 4v5h36V9a4 4 0 0 0-4-4");
}

.q7bn-mlfe {
  fill: var(--svg-color--141414, #141414);
  d: path("M0 14h36v9H0z");
}
</style><path class="q7bn-mlfe"/><path class="ko78l5bky"/><path class="fkagtxbpe"/>`,
		"fallback": "twemoji:flag-for-estonia",
	});
}

export default Component;
