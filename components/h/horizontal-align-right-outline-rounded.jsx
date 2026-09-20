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
		"content": `<style>.e3-h29_oq {
  fill: currentColor;
  d: path("M19.288 19.713Q19 19.425 19 19V5q0-.425.288-.712T20 4t.713.288T21 5v14q0 .425-.288.713T20 20t-.712-.288M13.2 13H4q-.425 0-.712-.288T3 12t.288-.712T4 11h9.2l-1.9-1.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l3.6 3.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-3.6 3.6q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7z");
}
</style><path class="e3-h29_oq"/>`,
		"fallback": "material-symbols:horizontal-align-right-outline-rounded",
	});
}

export default Component;
