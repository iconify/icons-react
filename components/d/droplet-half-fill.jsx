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
		"content": `<style>.lyq0kspjh {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M18.4 9.2C19.4386 10.5848 20 12.269 20 14C20 18.4183 16.4183 22 12 22C7.5817 22 4 18.4183 4 14C4 12.269 4.5614 10.5848 5.6 9.2L10.4 2.8C10.7777 2.2965 11.3703 2 12 2C12.6297 2 13.2223 2.2965 13.5999 2.7999L18.4 9.2ZM12 7L12 18.899C12 19.4513 12.4477 19.899 13 19.899C13.0672 19.899 13.1342 19.8922 13.2 19.8788C15.9935 19.3085 18 16.8512 18 14C18 12.7018 17.5789 11.4386 16.8 10.4L13.8 6.4C13.6111 6.1482 13.3148 6 13 6C12.4477 6 12 6.4477 12 7Z");
}
</style><path clip-rule="evenodd" class="lyq0kspjh"/>`,
		"fallback": "keyline-icons:droplet-half-fill",
	});
}

export default Component;
