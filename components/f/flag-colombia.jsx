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
		"content": `<style>.rj-y8llhr {
  fill: var(--svg-color--fbd116, #fbd116);
  d: path("M32 5H4a4 4 0 0 0-4 4v9h36V9a4 4 0 0 0-4-4");
}

.y51vjfbzm {
  fill: var(--svg-color--22408c, #22408c);
  d: path("M0 18h36v7H0z");
}

.z2w88ujgm {
  fill: var(--svg-color--ce2028, #ce2028);
  d: path("M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-2H0z");
}
</style><path class="rj-y8llhr"/><path class="y51vjfbzm"/><path class="z2w88ujgm"/>`,
		"fallback": "twemoji:flag-colombia",
	});
}

export default Component;
