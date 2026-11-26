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
		"content": `<style>.u-lk5g9qr {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 1C17.937 1 23 6.0629 23 12C23 17.937 17.937 23 12 23C6.0629 23 1 17.937 1 12C1 6.0629 6.0629 1 12 1ZM12 12L16.9497 16.9497C18.2625 15.637 19 13.8565 19 12C19 8.134 15.866 5 12 5Z");
}
</style><path clip-rule="evenodd" class="u-lk5g9qr"/>`,
		"fallback": "keyline-icons:circle-three-eighth-sharp-fill",
	});
}

export default Component;
