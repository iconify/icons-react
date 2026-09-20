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
		"content": `<style>.a0cf3dtxi {
  fill: currentColor;
  d: path("M3.385 18q-.69 0-1.153-.462t-.463-1.153v-8.77q0-.69.463-1.152T3.384 6h8.77q.69 0 1.153.463t.462 1.153v8.769q0 .69-.462 1.153T12.154 18zm.846-3.23h7.077l-2.139-2.886l-1.9 2.5l-1.4-1.85zM17 18V6h1v12zm4.23 0V6h1v12z");
}
</style><path class="a0cf3dtxi"/>`,
		"fallback": "material-symbols-light:art-track",
	});
}

export default Component;
