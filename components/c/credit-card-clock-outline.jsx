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
		"content": `<style>.niulglb0h {
  fill: currentColor;
  d: path("M4 18v-8v.325V6zM4 8h16V6H4zm7.675 12H4q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v5.25q-.9-.625-1.95-.937T17.9 10q-1.35 0-2.6.525T13.1 12H4v6h7.075q.075.525.225 1.025t.375.975m8-.625l.7-.7L18.5 16.8V14h-1v3.2zM18.025 22q-2.1 0-3.562-1.45T13 17t1.463-3.55T18.025 12q2.075 0 3.525 1.463T23 17t-1.45 3.538T18.025 22");
}
</style><path class="niulglb0h"/>`,
		"fallback": "material-symbols:credit-card-clock-outline",
	});
}

export default Component;
