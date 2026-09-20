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
		"content": `<style>.e4qbsswvn {
  fill: var(--svg-color--0053a5, #0053a5);
  d: path("M18 22v9h14a4 4 0 0 0 4-4v-5zM0 22v5a4 4 0 0 0 4 4h7v-9zM11 5H4a4 4 0 0 0-4 4v5h11zm21 0H18v9h18V9a4 4 0 0 0-4-4");
}

.m09c69bmg {
  fill: var(--svg-color--ffce00, #ffce00);
  d: path("M18 5h-2v11h20v-2H18zm-2 17v9h2v-9h18v-2H16zm-3-2H0v2h11v9h2v-9zm0-6V5h-2v9H0v2h13z");
}

.rog8_17ro {
  fill: var(--svg-color--d21034, #d21034);
  d: path("M16 5h-3v11H0v4h13v11h3V20h20v-4H16z");
}
</style><path class="m09c69bmg"/><path class="rog8_17ro"/><path class="e4qbsswvn"/>`,
		"fallback": "twemoji:flag-aland-islands",
	});
}

export default Component;
