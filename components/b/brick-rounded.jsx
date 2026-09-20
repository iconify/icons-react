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
		"content": `<style>.ry-675smd {
  fill: currentColor;
  d: path("M2 18.5v-9q0-.625.438-1.062T3.5 8H5V5.5q0-.625.438-1.062T6.5 4h3q.625 0 1.063.438T11 5.5V8h2V5.5q0-.625.438-1.062T14.5 4h3q.625 0 1.063.438T19 5.5V8h1.5q.625 0 1.063.438T22 9.5v9q0 .625-.437 1.063T20.5 20h-17q-.625 0-1.062-.437T2 18.5");
}
</style><path class="ry-675smd"/>`,
		"fallback": "material-symbols:brick-rounded",
	});
}

export default Component;
