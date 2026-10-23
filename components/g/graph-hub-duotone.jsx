import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ynvucfr4t.css';
import '../../css/s/sejsv2htr.css';
import '../../css/f/fc-ta9bhu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ynvucfr4t"/><path class="sejsv2htr"/><path class="fc-ta9bhu"/></g>`,
		"fallback": "lucide-extended:graph-hub-duotone",
	});
}

export default Component;
