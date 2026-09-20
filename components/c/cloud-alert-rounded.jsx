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
		"content": `<style>.kmieysb1j {
  fill: currentColor;
  d: path("M6.5 20q-2.275 0-3.887-1.575T1 14.575q0-1.95 1.175-3.475T5.25 9.15q.625-2.3 2.5-3.725T12 4q2.925 0 4.963 2.038T19 11q1.725.2 2.863 1.488T23 15.5q0 1.875-1.312 3.188T18.5 20zm6.213-4.288Q13 15.425 13 15t-.288-.712T12 14t-.712.288T11 15t.288.713T12 16t.713-.288m0-3.5Q13 11.926 13 11.5V9q0-.425-.288-.712T12 8t-.712.288T11 9v2.5q0 .425.288.713T12 12.5t.713-.288");
}
</style><path class="kmieysb1j"/>`,
		"fallback": "material-symbols:cloud-alert-rounded",
	});
}

export default Component;
