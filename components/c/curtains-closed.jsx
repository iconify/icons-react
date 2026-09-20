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
		"content": `<style>.i3cr0pqzy {
  fill: currentColor;
  d: path("M2 21v-2h2V3h16v16h2v2zm9-2h2V5h-2z");
}
</style><path class="i3cr0pqzy"/>`,
		"fallback": "material-symbols:curtains-closed",
	});
}

export default Component;
