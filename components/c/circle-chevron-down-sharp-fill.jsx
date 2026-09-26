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
		"content": `<style>.ey3bs5pmj {
  fill: currentColor;
  d: path("M12 1C17.937 1 23 6.0629 23 12C23 17.937 17.937 23 12 23C6.0629 23 1 17.937 1 12C1 6.0629 6.0629 1 12 1ZM7 10.4142L11.2929 14.7071C11.6834 15.0976 12.3166 15.0976 12.7071 14.7071L17 10.4142L15.5858 9L12 12.5858L8.4142 9L7 10.4142Z");
}
</style><path class="ey3bs5pmj"/>`,
		"fallback": "keyline-icons:circle-chevron-down-sharp-fill",
	});
}

export default Component;
