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
		"content": `<style>.q8zsfrlau {
  fill: currentColor;
  d: path("M12 1C17.937 1 23 6.0629 23 12C23 17.937 17.937 23 12 23C6.0629 23 1 17.937 1 12C1 6.0629 6.0629 1 12 1ZM16 9.4142L14.5858 8L8 14.5858L9.4142 16L16 9.4142Z");
}
</style><path class="q8zsfrlau"/>`,
		"fallback": "keyline-icons:circle-slash-sharp-fill",
	});
}

export default Component;
