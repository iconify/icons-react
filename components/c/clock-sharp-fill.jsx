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
		"content": `<style>.q74n_kb-t {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 1C17.937 1 23 6.0629 23 12C23 17.937 17.937 23 12 23C6.0629 23 1 17.937 1 12C1 6.0629 6.0629 1 12 1ZM11 5L11 12C11 12.5523 11.4477 13 12 13L18 13L18 11L13 11L13 5L11 5Z");
}
</style><path clip-rule="evenodd" class="q74n_kb-t"/>`,
		"fallback": "keyline-icons:clock-sharp-fill",
	});
}

export default Component;
