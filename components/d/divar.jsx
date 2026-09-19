import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.xnq_o4_ov {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.56 31.707a51 51 0 0 1-5.785.83m15.082-11.729c4.194 6.087-.346 8.333-5.73 9.998m-23.245-9.012c-.585 5.77-3.938 10.644-8.382 13.63m13.984-22.849c-.225 6.195-.467 11.135-1.276 15.837m17.146-7.141c-.282 5.017-4.704 7.165-9.14 6.395c-1.645-.285-4.265-.976-1.452-4.736c1.033-1.38 3.127-2.391 3.055-.35c-.18 5.036-4.848 10.118-8.768 12.76");
}
</style><path class="xnq_o4_ov"/>`,
		"fallback": "arcticons:divar",
	});
}

export default Component;
