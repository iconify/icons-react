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
		"content": `<style>.rw_b7ob0c {
  fill: currentColor;
  d: path("M1 17V7h2v8h8V7h12v10zm12-2h8V9h-8zm0-6v6zm-3.875 4.125Q10 12.25 10 11t-.875-2.125T7 8t-2.125.875T4 11t.875 2.125T7 14t2.125-.875m-2.838-1.412Q6 11.425 6 11t.288-.712T7 10t.713.288T8 11t-.288.713T7 12t-.712-.288M7 11");
}
</style><path class="rw_b7ob0c"/>`,
		"fallback": "material-symbols:airline-seat-individual-suite-outline-sharp",
	});
}

export default Component;
