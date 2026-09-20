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
		"content": `<style>.wk1vw805e {
  fill: currentColor;
  d: path("M8 3.75A.75.75 0 0 1 8.75 3h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 8 3.75m-2.547.853c-.387.151-.696.46-.849.846a.75.75 0 1 1-1.413-.492h-.005a3 3 0 0 1 1.77-1.77v.004a.75.75 0 1 1 .497 1.412m9.944.846a1.5 1.5 0 0 0-.938-.878a.75.75 0 0 1 .586-1.38v-.005a3 3 0 0 1 1.77 1.77h-.005a.75.75 0 1 1-1.413.493M3.75 11a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 1.5 0v1.5a.75.75 0 0 1-.75.75m11.75-.75a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-1.5 0zm-12.5 6a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75M3.75 13a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="wk1vw805e"/>`,
		"fallback": "fluent:border-bottom-double-20-filled",
	});
}

export default Component;
