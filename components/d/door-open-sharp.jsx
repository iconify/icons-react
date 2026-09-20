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
		"content": `<style>.wela2lb1m {
  fill: currentColor;
  d: path("M3 21v-2h2V3h14v16h2v2zm12-2h2V5h-2zm-3.287-6.287Q12 12.425 12 12t-.288-.712T11 11t-.712.288T10 12t.288.713T11 13t.713-.288");
}
</style><path class="wela2lb1m"/>`,
		"fallback": "material-symbols:door-open-sharp",
	});
}

export default Component;
