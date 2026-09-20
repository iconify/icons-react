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
		"content": `<style>.ub90b-hce {
  fill: currentColor;
  d: path("M2 22V2h20v20zm6.288-8.287Q8 13.425 8 13t.288-.712T9 12t.713.288T10 13t-.288.713T9 14t-.712-.288m6 0Q14 13.426 14 13t.288-.712T15 12t.713.288T16 13t-.288.713T15 14t-.712-.288M5 11.1v7.4h2v-2h10v2h2v-7.4l-1.925-5.6H6.925zm2.65-1.6l.7-2h7.3l.7 2z");
}
</style><path class="ub90b-hce"/>`,
		"fallback": "material-symbols:garage-sharp",
	});
}

export default Component;
