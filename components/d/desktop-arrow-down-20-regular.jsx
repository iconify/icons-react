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
		"content": `<style>.wd6-s1mdk {
  fill: currentColor;
  d: path("M19 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4.854 2.353l.003.003a.5.5 0 0 0 .348.144h.006a.5.5 0 0 0 .35-.146l2-2a.5.5 0 0 0-.707-.708L15 6.293V3.5a.5.5 0 0 0-1 0v2.793l-1.146-1.147a.5.5 0 0 0-.708.708zM17 13v-2.6a5.5 5.5 0 0 0 1-.657V13a2 2 0 0 1-2 2h-3v2h1.5a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1H7v-2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6.257A5.5 5.5 0 0 0 9.6 3H4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1m-5 2H8v2h4z");
}
</style><path class="wd6-s1mdk"/>`,
		"fallback": "fluent:desktop-arrow-down-20-regular",
	});
}

export default Component;
