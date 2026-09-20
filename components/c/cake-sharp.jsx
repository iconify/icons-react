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
		"content": `<style>.hzy7csbmn {
  fill: currentColor;
  d: path("M3 22v-7h18v7zm2-9V8h6V6.55q-.45-.3-.725-.725T10 4.8q0-.375.15-.738t.45-.662L12 2l1.4 1.4q.3.3.45.662T14 4.8q0 .6-.275 1.025T13 6.55V8h6v5z");
}
</style><path class="hzy7csbmn"/>`,
		"fallback": "material-symbols:cake-sharp",
	});
}

export default Component;
