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
		"content": `<style>.uylpcjxsv {
  fill: currentColor;
  d: path("M3.577 18.346v-3.73q0-.847.577-1.424q.577-.576 1.423-.576H7V5.885q0-.44.299-.74t.74-.299h7.923q.44 0 .739.3t.299.739v6.73h1.423q.846 0 1.423.577t.577 1.424v3.73q0 .44-.299.74t-.74.299H4.617q-.441 0-.74-.3t-.299-.739M8 12.616h8v-6.77H8zm-3.423 5.768h14.846v-3.768q0-.425-.287-.713t-.713-.288H5.577q-.425 0-.712.288t-.288.713zm13.039-2.153q.425 0 .712-.288t.288-.712t-.288-.713t-.712-.287t-.713.287t-.287.713t.287.712t.713.288M4.577 13.615h14.846z");
}
</style><path class="uylpcjxsv"/>`,
		"fallback": "material-symbols-light:adf-scanner-outline-rounded",
	});
}

export default Component;
