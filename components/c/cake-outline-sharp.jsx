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
		"content": `<style>.kt5bgh6hw {
  fill: currentColor;
  d: path("M3 22v-8h2V8h6V6.55q-.45-.3-.725-.725T10 4.8q0-.375.15-.738t.45-.662L12 2l1.4 1.4q.3.3.45.662T14 4.8q0 .6-.275 1.025T13 6.55V8h6v6h2v8zm4-8h10v-4H7zm-2 6h14v-4H5zm2-6h10zm-2 6h14zm14-6H5z");
}
</style><path class="kt5bgh6hw"/>`,
		"fallback": "material-symbols:cake-outline-sharp",
	});
}

export default Component;
