import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tjq40eb5h {
  fill: currentColor;
  d: path("M15.53 7.122c-2.979-4.166-9.174-4.162-12.146.009a7.46 7.46 0 0 0 .609 9.409l11.275 12.14a1 1 0 0 0 1.464.001L28 16.583a7.48 7.48 0 0 0 .584-9.485c-3.01-4.155-9.216-4.114-12.171.081l-.417.593z");
}
</style><path class="tjq40eb5h"/>`,
		"fallback": "fluent:heart-32-filled",
	});
}

export default Component;
