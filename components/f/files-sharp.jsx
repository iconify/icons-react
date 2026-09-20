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
		"content": `<style>.v17-dzbpb {
  fill: currentColor;
  d: path("M3 19v-4.77h9.23V5H21v14zm0-5.058V7h6.942zm2.114-.711l6.117-6.117v6.117z");
}
</style><path class="v17-dzbpb"/>`,
		"fallback": "material-symbols-light:files-sharp",
	});
}

export default Component;
