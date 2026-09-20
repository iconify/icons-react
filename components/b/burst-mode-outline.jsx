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
		"content": `<style>.jxkg48bts {
  fill: currentColor;
  d: path("M1.77 18V6h1v12zM6 18V6h1v12zm5.846 0q-.69 0-1.153-.462t-.462-1.153v-8.77q0-.69.462-1.152T11.846 6h8.77q.69 0 1.152.463t.463 1.153v8.769q0 .69-.463 1.153T20.616 18zm0-1h8.77q.23 0 .423-.192t.192-.424V7.616q0-.231-.193-.424T20.617 7h-8.77q-.23 0-.423.192t-.192.423v8.77q0 .23.192.423q.193.192.423.192m.846-2.23h7.077l-2.138-2.886l-1.9 2.5l-1.4-1.85zM11.231 17V7z");
}
</style><path class="jxkg48bts"/>`,
		"fallback": "material-symbols-light:burst-mode-outline",
	});
}

export default Component;
