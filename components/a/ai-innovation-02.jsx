import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/roictrb7z.css';
import '../../css/m/m79z381ao.css';
import '../../css/t/tgwjvvlpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="roictrb7z"/><path class="m79z381ao"/><path class="tgwjvvlpl"/></g>`,
		"fallback": "hugeicons:ai-innovation-02",
	});
}

export default Component;
