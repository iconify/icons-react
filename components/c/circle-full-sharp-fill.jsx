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
		"content": `<style>.p6dwc_bix {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 1C17.937 1 23 6.0629 23 12C23 17.937 17.937 23 12 23C6.0629 23 1 17.937 1 12C1 6.0629 6.0629 1 12 1ZM12 5C15.728 5 19 8.272 19 12C19 15.728 15.728 19 12 19C8.272 19 5 15.728 5 12C5 8.272 8.272 5 12 5Z");
}
</style><path clip-rule="evenodd" class="p6dwc_bix"/>`,
		"fallback": "keyline-icons:circle-full-sharp-fill",
	});
}

export default Component;
