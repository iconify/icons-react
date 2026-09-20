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
		"content": `<style>.s87-_phdx {
  fill: currentColor;
  d: path("M9.713 12.713Q10 12.425 10 12t-.288-.712T9 11t-.712.288T8 12t.288.713T9 13t.713-.288m6 0Q16 12.426 16 12t-.288-.712T15 11t-.712.288T14 12t.288.713T15 13t.713-.288M4 21q-.425 0-.712-.288T3 20q0-.4.363-.562T4 19V5q0-.825.588-1.412T6 3h5.5v16h1V3H18q.825 0 1.413.588T20 5v14q.425 0 .713.288T21 20t-.288.713T20 21z");
}
</style><path class="s87-_phdx"/>`,
		"fallback": "material-symbols:door-sliding-rounded",
	});
}

export default Component;
