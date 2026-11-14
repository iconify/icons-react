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
		"content": `<style>.bwz7kzb-y {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M18.5 2.25h-13q-1.346 0-2.298.952T2.25 5.5v13q0 1.346.952 2.298t2.298.952h13q1.346 0 2.298-.952t.952-2.298v-13q0-1.346-.952-2.298T18.5 2.25m-2.434 5.684Q17.75 9.618 17.75 12t-1.684 4.066T12 17.75t-4.066-1.684T6.25 12t1.684-4.066T12 6.25t4.066 1.684M8.25 12q0-3.75 3.75-3.75T15.75 12T12 15.75T8.25 12");
}
</style><path class="bwz7kzb-y"/>`,
		"fallback": "uix-solid:element-astatine",
	});
}

export default Component;
