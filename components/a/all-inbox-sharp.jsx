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
		"content": `<style>.o_kblgblg {
  fill: currentColor;
  d: path("M13.5 13.616q.908 0 1.579-.569q.671-.568.671-1.431h3.75V4h-12v7.616h3.75q0 .863.674 1.431t1.576.569M6.5 17V3h14v14zm-3 3V6.616h1V19h12.385v1z");
}
</style><path class="o_kblgblg"/>`,
		"fallback": "material-symbols-light:all-inbox-sharp",
	});
}

export default Component;
