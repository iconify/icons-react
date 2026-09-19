import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.kxvuyd7py {
  fill: var(--svg-color--354a54, #354a54);
  d: path("M57.55 14.451c9.694 14.11 6.109 33.406-7.999 43.1c-14.11 9.695-33.408 6.112-43.1-7.999c-9.693-14.11-6.112-33.41 8-43.1c14.11-9.692 33.408-6.109 43.1 8");
}
</style><path class="kxvuyd7py"/>`,
		"fallback": "emojione-v1:black-circle",
	});
}

export default Component;
