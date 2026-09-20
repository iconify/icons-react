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
		"content": `<style>.vbnz0zbzx {
  fill: currentColor;
  d: path("M12 14.308L8.192 10.5h7.616z");
}
</style><path class="vbnz0zbzx"/>`,
		"fallback": "material-symbols-light:arrow-drop-down-sharp",
	});
}

export default Component;
