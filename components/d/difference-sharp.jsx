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
		"content": `<style>.vhe0glbcl {
  fill: currentColor;
  d: path("M12.5 11h2V9h2V7h-2V5h-2v2h-2v2h2zm-2 4h6v-2h-6zM6 19V1h9l6 6v12zm-4 4V7h2v14h11v2z");
}
</style><path class="vhe0glbcl"/>`,
		"fallback": "material-symbols:difference-sharp",
	});
}

export default Component;
