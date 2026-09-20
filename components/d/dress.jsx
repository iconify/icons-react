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
		"content": `<style>.lolgcterg {
  fill: var(--svg-color--bbddf5, #bbddf5);
  d: path("M13 11h10v2H13z");
}

.s2fipuppm {
  fill: var(--svg-color--55acee, #55acee);
  d: path("M22.42 11.847L26 2s-.398.002-1 .034V0h-2v2.219c-2.271.302-5 1.028-5 2.781c0-1.753-2.729-2.479-5-2.781V0h-2v2.034C10.398 2.002 10 2 10 2l3.581 9.847L1 25.643S7 36 18 36s17-10.357 17-10.357z");
}

.tr-7c76bh {
  fill: var(--svg-color--3b88c3, #3b88c3);
  d: path("M15 13s-6.734 8.106-5.051 9.006C11.633 22.907 15 13 15 13m6.096 0s6.734 8.105 5.051 9.007c-1.684.9-5.051-9.007-5.051-9.007M18 13s-2 11 0 11s0-11 0-11");
}
</style><path class="s2fipuppm"/><path class="lolgcterg"/><path class="tr-7c76bh"/>`,
		"fallback": "twemoji:dress",
	});
}

export default Component;
