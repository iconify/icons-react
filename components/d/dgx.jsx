import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.d49yi0b0p {
  fill: var(--svg-color--e3c88e, #e3c88e);
  d: path("M12 10.875V21l-5.062-5.062z");
}

.ft5dv1b6b {
  fill: none;
}

.i6pblnrov {
  fill: var(--svg-color--c2a059, #c2a059);
  d: path("m12 10.875l5.063 5.063L12 21z");
}

.pejpqvkrt {
  fill: var(--svg-color--131f35, #131f35);
  d: path("m12 3l9 9.073l-3.274 3.302L12 9.598z");
}

.w350x-bqr {
  fill: var(--svg-color--243961, #243961);
  d: path("M12 3v6.598l-5.726 5.777L3 12.073z");
}
</style><g class="ft5dv1b6b"><path class="i6pblnrov"/><path class="d49yi0b0p"/><path class="w350x-bqr"/><path class="pejpqvkrt"/></g>`,
		"fallback": "token-branded:dgx",
	});
}

export default Component;
