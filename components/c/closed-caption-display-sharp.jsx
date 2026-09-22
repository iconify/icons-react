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
		"content": `<style>.mlxlsabml {
  fill: currentColor;
  d: path("M12.327 21v-6.115H21V21zm1-1H20v-4.115h-6.673zM4 19V5h16v7.5h-6.192v-2.308h2.615v.616h.885v-1.5h-4.385v3.384h-2.98v1.116H7.576v-3.616h2.615v.616h.885v-1.5H6.692v5.384h3.25V19z");
}
</style><path class="mlxlsabml"/>`,
		"fallback": "material-symbols-light:closed-caption-display-sharp",
	});
}

export default Component;
