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
		"content": `<style>.byr42_0-k {
  fill: currentColor;
  d: path("M7.5 16h12v-3.384h-2.973q-.333.944-1.171 1.472t-1.856.528q-1.012 0-1.85-.528t-1.177-1.472H7.5zm6-2.384q.908 0 1.579-.569q.671-.568.671-1.431h3.75V4h-12v7.616h3.75q0 .863.674 1.431t1.576.569M6.5 17V3h14v14zm-3 3V6.616h1V19h12.385v1zm4-4h12z");
}
</style><path class="byr42_0-k"/>`,
		"fallback": "material-symbols-light:all-inbox-outline-sharp",
	});
}

export default Component;
