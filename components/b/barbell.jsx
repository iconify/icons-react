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
		"content": `<style>.tdbsxxf7s {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.25 4.25q.775 0 1.25.301q.475-.301 1.25-.301q2 0 2 2v5h6.5v-5q0-2 2-2q.775 0 1.25.301q.475-.301 1.25-.301q.828 0 1.414.586t.586 1.414v11.5q0 .828-.586 1.414t-1.414.586q-.775 0-1.25-.301q-.475.301-1.25.301q-2 0-2-2v-5h-6.5v5q0 2-2 2q-.775 0-1.25-.301q-.475.301-1.25.301q-2 0-2-2V6.25q0-2 2-2");
}
</style><path class="tdbsxxf7s"/>`,
		"fallback": "uix-solid:barbell",
	});
}

export default Component;
