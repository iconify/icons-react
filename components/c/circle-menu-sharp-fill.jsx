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
		"content": `<style>.nyb81obux {
  fill: currentColor;
  d: path("M12 1C17.937 1 23 6.0629 23 12C23 17.937 17.937 23 12 23C6.0629 23 1 17.937 1 12C1 6.0629 6.0629 1 12 1ZM7 17L17 17L17 15L7 15L7 17ZM7 13L17 13L17 11L7 11L7 13ZM7 9L17 9L17 7L7 7L7 9Z");
}
</style><path class="nyb81obux"/>`,
		"fallback": "keyline-icons:circle-menu-sharp-fill",
	});
}

export default Component;
