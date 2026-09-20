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
		"content": `<style>.bebczmn0z {
  fill: currentColor;
  d: path("M6 22q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4v16q0 .825-.587 1.413T18 22zm2-4h8v-2H8zm4-4q1.65 0 2.825-1.175T16 10t-1.175-2.825T12 6T9.175 7.175T8 10t1.175 2.825T12 14m0-3q-.425 0-.712-.288T11 10t.288-.712T12 9t.713.288T13 10t-.288.713T12 11");
}
</style><path class="bebczmn0z"/>`,
		"fallback": "material-symbols:hard-disk",
	});
}

export default Component;
