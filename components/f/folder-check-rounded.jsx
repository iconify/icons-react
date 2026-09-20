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
		"content": `<style>.fzqalyb8s {
  fill: currentColor;
  d: path("m10.85 14.442l-1.771-1.751q-.146-.147-.344-.156t-.364.156q-.146.146-.146.347t.146.347l1.888 1.913q.243.243.578.243t.578-.243l4.02-4.038q.146-.146.146-.347t-.147-.347t-.347-.147t-.347.147zM4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h4.31q.323 0 .628.13q.305.132.522.349L11.596 7h7.789q.69 0 1.153.463T21 8.616v8.769q0 .69-.462 1.153T19.385 19z");
}
</style><path class="fzqalyb8s"/>`,
		"fallback": "material-symbols-light:folder-check-rounded",
	});
}

export default Component;
