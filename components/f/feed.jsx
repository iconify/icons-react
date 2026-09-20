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
		"content": `<style>.wxvgrhbok {
  fill: currentColor;
  d: path("M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h9.961L20 8.423v9.962q0 .69-.462 1.153T18.384 20zM7.5 16h9v-1h-9zm0-3.5h9v-1h-9zM15 9h4l-4-4zM7.5 9H12V8H7.5z");
}
</style><path class="wxvgrhbok"/>`,
		"fallback": "material-symbols-light:feed",
	});
}

export default Component;
