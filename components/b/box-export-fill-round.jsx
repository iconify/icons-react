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
		"content": `<style>.p1-kicceh {
  fill: currentColor;
  d: path("M3.088 5.373q.268-.22.578-.373l.006-.003l7-3.456a3 3 0 0 1 1.312-.31h.032c.456.002.904.108 1.312.31l7 3.456A3 3 0 0 1 22 7.687V12a1 1 0 0 1-2 0V8.008a2 2 0 0 1-.35.219l-5.392 2.662ZM12 12.004l1 .494V20a2.244 2.244 0 0 1-3.232 2.013l-6.096-3.01A3 3 0 0 1 2 16.313V7.687q0-.299.057-.593Zm5.293 8.289L18.586 19H15a1 1 0 0 1 0-2h3.586l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a.999.999 0 1 1-1.414-1.414");
}
</style><path class="p1-kicceh"/>`,
		"fallback": "coolicons:box-export-fill-round",
	});
}

export default Component;
