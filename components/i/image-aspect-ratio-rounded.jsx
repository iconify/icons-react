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
		"content": `<style>.yxrktr19h {
  fill: currentColor;
  d: path("M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm3.713-8.287Q8 11.425 8 11t-.288-.712T7 10t-.712.288T6 11t.288.713T7 12t.713-.288m4 0Q12 11.426 12 11t-.288-.712T11 10t-.712.288T10 11t.288.713T11 12t.713-.288m4 0Q16 11.426 16 11t-.288-.712T15 10t-.712.288T14 11t.288.713T15 12t.713-.288m0 4Q16 15.426 16 15t-.288-.712T15 14t-.712.288T14 15t.288.713T15 16t.713-.288");
}
</style><path class="yxrktr19h"/>`,
		"fallback": "material-symbols:image-aspect-ratio-rounded",
	});
}

export default Component;
