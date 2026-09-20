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
		"content": `<style>.igv9ovbjk {
  fill: currentColor;
  d: path("M13.588 22.413Q13 21.825 13 21q0-.575.275-1.025T14 19.25v-5.525q-.45-.275-.725-.712T13 12q0-.825.588-1.412T15 10t1.413.588T17 12q0 .575-.275 1.013t-.725.712V16.6l4-1.325v-1.55q-.45-.275-.725-.712T19 12q0-.825.588-1.412T21 10t1.413.588T23 12q0 .575-.275 1.013t-.725.712v1.525q0 .65-.375 1.175t-1 .725L16 18.7v.55q.45.275.725.725T17 21q0 .825-.587 1.413T15 23t-1.412-.587M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h9q.425 0 .713.288T22 7t-.288.713T21 8h-6q-1.65 0-2.825 1.175T11 12q0 .775.263 1.45t.737 1.2v3.7q-.325.35-.537.762t-.338.888z");
}
</style><path class="igv9ovbjk"/>`,
		"fallback": "material-symbols:folder-data-rounded",
	});
}

export default Component;
