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
		"content": `<style>.k1k5hrwjy {
  fill: currentColor;
  d: path("M5 21v-4.192q1.929-1.568 2.848-3.295t1.479-3.84h-.846q-.69 0-1.153-.463t-.462-1.152V3h3.788v2.827h2.712V3h3.788v5.058q0 .69-.463 1.153t-1.152.462h-.872q.58 2.114 1.48 3.84T19 16.809V21z");
}
</style><path class="k1k5hrwjy"/>`,
		"fallback": "material-symbols-light:chess-rook",
	});
}

export default Component;
