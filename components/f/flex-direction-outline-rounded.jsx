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
		"content": `<style>.gewf6e54k {
  fill: currentColor;
  d: path("M2 19v-5q0-.425.288-.712T3 13h7q.425 0 .713.288T11 14v5q0 .425-.288.713T10 20H3q-.425 0-.712-.288T2 19m0-9V5q0-.425.288-.712T3 4h7q.425 0 .713.288T11 5v5q0 .425-.288.713T10 11H3q-.425 0-.712-.288T2 10m2-1h5V6H4zm13.625 10.513q-.175-.063-.325-.213l-3.6-3.6q-.275-.275-.287-.687t.287-.713q.275-.275.7-.275t.7.275l1.9 1.875V5q0-.425.288-.712T18 4t.713.288T19 5v11.175l1.9-1.875q.275-.275.688-.288t.712.288q.275.275.275.7t-.275.7l-3.6 3.6q-.15.15-.325.213t-.375.062t-.375-.062");
}
</style><path class="gewf6e54k"/>`,
		"fallback": "material-symbols:flex-direction-outline-rounded",
	});
}

export default Component;
