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
		"content": `<style>.u7bg93bls {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.752 4.752Q1.75 7.754 1.75 12t3.002 7.248T12 22.25t7.248-3.002T22.25 12t-3.002-7.248T12 1.75T4.752 4.752m12.374 2.122q.586.586.586 1.414q0 .829-.586 1.414l-5.205 5.205q-.413.413-.974.572l-.862.247q-.829.237-1.438-.373q-.61-.609-.373-1.438l.247-.863q.159-.56.571-.973l5.206-5.205q.585-.586 1.414-.586q.828 0 1.414.586");
}
</style><path class="u7bg93bls"/>`,
		"fallback": "uix-solid:edit-circle",
	});
}

export default Component;
