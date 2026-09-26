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
		"content": `<style>.nb0l61w-t {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 1C17.937 1 23 6.0629 23 12C23 17.937 17.937 23 12 23C6.0629 23 1 17.937 1 12C1 6.0629 6.0629 1 12 1ZM6.6 13.1L17.4 13.1L17.4 10.9L6.6 10.9L6.6 13.1Z");
}
</style><path clip-rule="evenodd" class="nb0l61w-t"/>`,
		"fallback": "keyline-icons:circle-minus-sharp-fill",
	});
}

export default Component;
