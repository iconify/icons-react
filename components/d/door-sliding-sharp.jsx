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
		"content": `<style>.khm3-7bru {
  fill: currentColor;
  d: path("M9.713 12.713Q10 12.425 10 12t-.288-.712T9 11t-.712.288T8 12t.288.713T9 13t.713-.288m6 0Q16 12.426 16 12t-.288-.712T15 11t-.712.288T14 12t.288.713T15 13t.713-.288M3 21v-2h1V3h7.5v16h1V3H20v16h1v2z");
}
</style><path class="khm3-7bru"/>`,
		"fallback": "material-symbols:door-sliding-sharp",
	});
}

export default Component;
