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
		"content": `<style>.n952r42ky {
  fill: currentColor;
  d: path("M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h4.31q.323 0 .628.13q.305.132.522.349L11.596 7h7.789q.69 0 1.153.463T21 8.616v8.769q0 .69-.462 1.153T19.385 19zM14.9 14.662l1.392 1.063q.131.087.24.006t.059-.217l-.51-1.741l1.461-1.188q.106-.087.056-.22q-.05-.134-.186-.134h-1.766l-.554-1.685q-.05-.136-.192-.136t-.192.136l-.554 1.685h-1.765q-.137 0-.187.134q-.05.133.056.22l1.461 1.188l-.51 1.74q-.05.137.06.218t.239-.006z");
}
</style><path class="n952r42ky"/>`,
		"fallback": "material-symbols-light:folder-special-rounded",
	});
}

export default Component;
