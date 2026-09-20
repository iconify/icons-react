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
		"content": `<style>.tcb60bgwx {
  fill: currentColor;
  d: path("M11 20v-6H7q-.425 0-.712-.288T6 13t.288-.712T7 12h3.725l-4.75-7.45q-.325-.5-.037-1.025T6.825 3q.275 0 .5.125t.35.35L12 10.3l4.325-6.825q.125-.225.35-.35t.5-.125q.6 0 .888.525t-.038 1.025L13.275 12H17q.425 0 .713.288T18 13t-.288.713T17 14h-4v6q0 .425-.288.713T12 21t-.712-.288T11 20");
}
</style><path class="tcb60bgwx"/>`,
		"fallback": "material-symbols:currency-yuan-outline-rounded",
	});
}

export default Component;
