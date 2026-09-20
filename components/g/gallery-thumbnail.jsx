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
		"content": `<style>.a3yqvgbpp {
  fill: currentColor;
  d: path("M3 19q-.825 0-1.412-.587T1 17V7q0-.825.588-1.412T3 5h10q.825 0 1.413.588T15 7v10q0 .825-.587 1.413T13 19zm15-8q-.425 0-.712-.288T17 10V6q0-.425.288-.712T18 5h4q.425 0 .713.288T23 6v4q0 .425-.288.713T22 11zM4 15h8l-2.625-3.5L7.5 14l-1.375-1.825zm14 4q-.425 0-.712-.288T17 18v-4q0-.425.288-.712T18 13h4q.425 0 .713.288T23 14v4q0 .425-.288.713T22 19z");
}
</style><path class="a3yqvgbpp"/>`,
		"fallback": "material-symbols:gallery-thumbnail",
	});
}

export default Component;
