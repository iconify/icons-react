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
		"content": `<style>.fvn3v575x {
  fill: currentColor;
  d: path("M13 8q-.425 0-.712-.288T12 7q0-1.25.875-2.125T15 4t2.125.875T18 7v3h3q.425 0 .713.288T22 11t-.288.713T21 12h-1v6q0 .825-.587 1.413T18 20H6q-.825 0-1.412-.587T4 18v-6H3q-.425 0-.712-.288T2 11t.288-.712T3 10h3q-.825 0-1.412-.587T4 8V5q0-.425.288-.712T5 4h4q.425 0 .713.288T10 5v3q0 .825-.587 1.413T8 10h8V7q0-.425-.288-.712T15 6t-.712.288T14 7t-.288.713T13 8m-2 10h2v-6h-2z");
}
</style><path class="fvn3v575x"/>`,
		"fallback": "material-symbols:countertops-rounded",
	});
}

export default Component;
