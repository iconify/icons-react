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
		"content": `<style>.ao849hbih {
  fill: currentColor;
  d: path("M8 16h8V8H8zm-5 5V3h18v18z");
}
</style><path class="ao849hbih"/>`,
		"fallback": "material-symbols:dialogs-sharp",
	});
}

export default Component;
