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
		"content": `<style>.e2fh_nqvh {
  fill: var(--svg-color--fff, #fff);
  d: path("M9.53 20.814L23.343 7L29 12.657L15.186 26.471z");
}

.vby53inem {
  fill: var(--svg-color--3b88c3, #3b88c3);
  d: path("M36 4a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4v28a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4z");
}

.ys_y19bwn {
  fill: var(--svg-color--fff, #fff);
  d: path("M9 11v16h16z");
}
</style><path class="vby53inem"/><path class="ys_y19bwn"/><path class="e2fh_nqvh"/>`,
		"fallback": "twemoji:down-left-arrow",
	});
}

export default Component;
