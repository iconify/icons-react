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
		"content": `<style>.mwfe7cbjh {
  fill: var(--svg-color--66757f, #66757f);
  d: path("M22 3s-6-3-11 2l-7 7s-1-1-2 0l-1 1s-1 1 0 2l4 4s1 1 2 0l1-1s1-1 0-2l-.078-.078c.77-.743 1.923-1.5 3.078-.922l4-4s-1-3 1-5s3-2 5-2s1-1 1-1");
}

.nl--5_bco {
  fill: var(--svg-color--f4900c, #f4900c);
  d: path("M29.879 33.879C31.045 35.045 32.9 35.1 34 34s1.045-2.955-.121-4.121L12.121 8.121C10.955 6.955 9.1 6.9 8 8s-1.045 2.955.121 4.121z");
}
</style><path class="nl--5_bco"/><path class="mwfe7cbjh"/>`,
		"fallback": "twemoji:hammer",
	});
}

export default Component;
