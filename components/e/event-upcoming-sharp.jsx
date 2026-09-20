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
		"content": `<style>.v5hra9ysp {
  fill: currentColor;
  d: path("M15.058 21v-1H19v-9.384H5V14.5H4V5h3.385V2.77h1.077V5h7.154V2.77h1V5H20v16zM8 23.288l-.689-.688l3.056-3.1H1.5v-1h8.867l-3.056-3.1l.689-.688L12.289 19z");
}
</style><path class="v5hra9ysp"/>`,
		"fallback": "material-symbols-light:event-upcoming-sharp",
	});
}

export default Component;
