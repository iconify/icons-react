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
		"content": `<style>.o2-dfbcja {
  fill: currentColor;
  d: path("M7 13h7q.425 0 .713-.288T15 12t-.288-.712T14 11H7q-.425 0-.712.288T6 12t.288.713T7 13m0-3h7q.425 0 .713-.288T15 9t-.288-.712T14 8H7q-.425 0-.712.288T6 9t.288.713T7 10M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h16V6H4zm0 0V6z");
}
</style><path class="o2-dfbcja"/>`,
		"fallback": "material-symbols:featured-play-list-outline-rounded",
	});
}

export default Component;
