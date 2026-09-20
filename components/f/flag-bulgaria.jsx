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
		"content": `<style>.fnfhbcb1w {
  fill: var(--svg-color--eee, #eee);
  d: path("M32 5H4a4 4 0 0 0-4 4v5h36V9a4 4 0 0 0-4-4");
}

.i_yyqxbzn {
  fill: var(--svg-color--00966e, #00966e);
  d: path("M0 14h36v8H0z");
}

.qetqtn6tv {
  fill: var(--svg-color--d62612, #d62612);
  d: path("M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-5H0z");
}
</style><path class="fnfhbcb1w"/><path class="qetqtn6tv"/><path class="i_yyqxbzn"/>`,
		"fallback": "twemoji:flag-bulgaria",
	});
}

export default Component;
