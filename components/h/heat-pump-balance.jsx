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
		"content": `<style>.d526izbkw {
  fill: currentColor;
  d: path("M9.125 17.725Q10 16.85 10 15.6v-6q0-.425.288-.712T11 8.6t.713.288T12 9.6v6q0 1.25.875 2.125T15 18.6t2.125-.875T18 15.6v-7q0-.425.288-.712T19 7.6h1.175L19 8.75l1.4 1.425L24 6.6L20.4 3L19 4.425L20.175 5.6H19q-1.25 0-2.125.875T16 8.6v7q0 .425-.288.713T15 16.6t-.712-.288T14 15.6v-6q0-1.25-.875-2.125T11 6.6t-2.125.875T8 9.6v6q0 .425-.288.713T7 16.6t-.712-.288T6 15.6v-9H4v9q0 1.25.875 2.125T7 18.6t2.125-.875M3 21.6q-.825 0-1.412-.587T1 19.6v-8h22v8q0 .825-.587 1.413T21 21.6z");
}
</style><path class="d526izbkw"/>`,
		"fallback": "material-symbols:heat-pump-balance",
	});
}

export default Component;
