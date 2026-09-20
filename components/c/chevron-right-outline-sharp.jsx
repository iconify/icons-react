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
		"content": `<style>.nvl8vab5v {
  fill: currentColor;
  d: path("M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6z");
}
</style><path class="nvl8vab5v"/>`,
		"fallback": "material-symbols:chevron-right-outline-sharp",
	});
}

export default Component;
