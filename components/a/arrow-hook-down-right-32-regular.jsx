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
		"content": `<style>.ivs-vzbto {
  fill: currentColor;
  d: path("M22 7a1 1 0 1 1 0 2h-9l-.257.007A5 5 0 0 0 13 19h9.586l-3.293-3.293a1 1 0 1 1 1.414-1.414l5 5a1 1 0 0 1 0 1.414l-5 5l-.076.068a1 1 0 0 1-1.406-1.406l.068-.076L22.586 21H13a7 7 0 0 1-.36-13.991L13 7z");
}
</style><path class="ivs-vzbto"/>`,
		"fallback": "fluent:arrow-hook-down-right-32-regular",
	});
}

export default Component;
