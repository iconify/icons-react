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
		"content": `<style>.eyhxvubvd {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M17.9629 8.6666C19.2747 10.1334 20 12.0322 20 14C20 18.4183 16.4183 22 12 22C7.5817 22 4 18.4183 4 14C4 12.0322 4.7253 10.1334 6.0371 8.6666L12 1.9999L17.9629 8.6666ZM12 7.618L12 20C15.3137 20 18 17.3137 18 14C18 12.5241 17.456 11.1 16.4721 10L13.7454 6.9514C13.5556 6.7393 13.2846 6.618 13 6.618C12.4477 6.618 12 7.0657 12 7.618Z");
}
</style><path clip-rule="evenodd" class="eyhxvubvd"/>`,
		"fallback": "keyline-icons:droplet-half-sharp-fill",
	});
}

export default Component;
