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
		"content": `<style>.d7-a7nbto {
  fill: currentColor;
  d: path("M7.438 21.563Q7 21.125 7 20.5v-13q0-.625.438-1.062T8.5 6t1.063.438T10 7.5v13q0 .625-.437 1.063T8.5 22t-1.062-.437m7-6Q14 15.125 14 14.5v-7q0-.625.438-1.062T15.5 6t1.063.438T17 7.5v7q0 .625-.437 1.063T15.5 16t-1.062-.437M3 4q-.425 0-.712-.288T2 3t.288-.712T3 2h18q.425 0 .713.288T22 3t-.288.713T21 4z");
}
</style><path class="d7-a7nbto"/>`,
		"fallback": "material-symbols:align-vertical-top-outline-rounded",
	});
}

export default Component;
