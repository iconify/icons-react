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
		"content": `<style>.hgdaq5rml {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.779 9.314q.218-2.564 2.094-4.441Q8.997 2.75 12 2.75t5.127 2.123q1.867 1.868 2.092 4.415Q22.25 9.629 22.25 13v4.5q0 3.75-3.75 3.75t-3.75-3.75V13q0-3.333 2.962-3.704q-.216-1.932-1.646-3.362Q14.382 4.25 12 4.25T7.934 5.934q-1.43 1.43-1.646 3.362Q9.25 9.667 9.25 13v4.5q0 3.75-3.75 3.75T1.75 17.5V13q0-1.553 1.098-2.652q.834-.834 1.931-1.034");
}
</style><path class="hgdaq5rml"/>`,
		"fallback": "uix-solid:ear-defenders-lab",
	});
}

export default Component;
