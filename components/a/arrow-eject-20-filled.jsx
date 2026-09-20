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
		"content": `<style>.w46mgeoag {
  fill: currentColor;
  d: path("M11.199 4.6c-.6-.8-1.801-.8-2.401 0l-4.496 6.002c-.74.989-.035 2.4 1.2 2.4h8.995c1.236 0 1.941-1.412 1.2-2.4zM4 15a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1z");
}
</style><path class="w46mgeoag"/>`,
		"fallback": "fluent:arrow-eject-20-filled",
	});
}

export default Component;
