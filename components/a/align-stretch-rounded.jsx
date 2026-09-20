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
		"content": `<style>.cm7_q810y {
  fill: currentColor;
  d: path("M8 10q-.425 0-.712-.288T7 9V4H3q-.425 0-.712-.288T2 3t.288-.712T3 2h18q.425 0 .713.288T22 3t-.288.713T21 4h-4v5q0 .425-.288.713T16 10zM3 22q-.425 0-.712-.288T2 21t.288-.712T3 20h4v-5q0-.425.288-.712T8 14h8q.425 0 .713.288T17 15v5h4q.425 0 .713.288T22 21t-.288.713T21 22z");
}
</style><path class="cm7_q810y"/>`,
		"fallback": "material-symbols:align-stretch-rounded",
	});
}

export default Component;
