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
		"content": `<style>.vgoy3wsce {
  fill: currentColor;
  d: path("M9 17.5v3q0 .625.438 1.063T10.5 22h3q.625 0 1.063-.437T15 20.5v-3q0-.625-.437-1.062T13.5 16h-3q-.625 0-1.062.438T9 17.5m-1-4v-3q0-.625-.437-1.062T6.5 9h-3q-.625 0-1.062.438T2 10.5v3q0 .625.438 1.063T3.5 15h3q.625 0 1.063-.437T8 13.5m2.5 1.5h3q.625 0 1.063-.437T15 13.5v-3q0-.625-.437-1.062T13.5 9h-3q-.625 0-1.062.438T9 10.5v3q0 .625.438 1.063T10.5 15m7 0h3q.625 0 1.063-.437T22 13.5v-3q0-.625-.437-1.062T20.5 9h-3q-.625 0-1.062.438T16 10.5v3q0 .625.438 1.063T17.5 15m0-7h3q.625 0 1.063-.437T22 6.5v-3q0-.625-.437-1.062T20.5 2h-3q-.625 0-1.062.438T16 3.5v3q0 .625.438 1.063T17.5 8");
}
</style><path class="vgoy3wsce"/>`,
		"fallback": "material-symbols:crossword-rounded",
	});
}

export default Component;
