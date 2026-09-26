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
		"content": `<style>.kn14jqb5x {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 1C17.937 1 23 6.0629 23 12C23 17.937 17.937 23 12 23C6.0629 23 1 17.937 1 12C1 6.0629 6.0629 1 12 1ZM11 5L11 11L6 11L6 13L12 13C12.5523 13 13 12.5523 13 12L13 5L11 5Z");
}
</style><path clip-rule="evenodd" class="kn14jqb5x"/>`,
		"fallback": "keyline-icons:clock-9-sharp-fill",
	});
}

export default Component;
