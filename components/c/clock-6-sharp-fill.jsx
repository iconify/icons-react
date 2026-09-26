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
		"content": `<style>.c_czvyn5w {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 1C17.937 1 23 6.0629 23 12C23 17.937 17.937 23 12 23C6.0629 23 1 17.937 1 12C1 6.0629 6.0629 1 12 1ZM13 5L13 18L11 18L11 5L13 5Z");
}
</style><path clip-rule="evenodd" class="c_czvyn5w"/>`,
		"fallback": "keyline-icons:clock-6-sharp-fill",
	});
}

export default Component;
