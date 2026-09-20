import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.k5e4ctb9j {
  fill: currentColor;
  d: path("M18 14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8.586a1.5 1.5 0 0 1 1.06.44l3.915 3.914A1.5 1.5 0 0 1 18 9.414zm-2 1a1 1 0 0 0 1-1v-4h-3.5A1.5 1.5 0 0 1 12 8.5V5H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm-3-9.793V8.5a.5.5 0 0 0 .5.5h3.293z");
}
</style><path class="k5e4ctb9j"/>`,
		"fallback": "fluent:document-landscape-20-regular",
	});
}

export default Component;
