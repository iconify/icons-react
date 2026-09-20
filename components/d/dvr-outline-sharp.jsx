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
		"content": `<style>.v5ao_sb_s {
  fill: currentColor;
  d: path("M7.713 13.713Q8 13.425 8 13t-.288-.712T7 12t-.712.288T6 13t.288.713T7 14t.713-.288m0-4Q8 9.426 8 9t-.288-.712T7 8t-.712.288T6 9t.288.713T7 10t.713-.288M9 14h9v-2H9zm0-4h9V8H9zM8 21v-2H2V3h20v16h-6v2zm-4-4h16V5H4zm0 0V5z");
}
</style><path class="v5ao_sb_s"/>`,
		"fallback": "material-symbols:dvr-outline-sharp",
	});
}

export default Component;
