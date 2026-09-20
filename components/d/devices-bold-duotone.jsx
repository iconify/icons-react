import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i4xinab9i.css';
import '../../css/p/pq64lglul.css';
import '../../css/v/vfmtqtm3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i4xinab9i"/><path class="pq64lglul"/><path class="vfmtqtm3z"/></g>`,
		"fallback": "solar:devices-bold-duotone",
	});
}

export default Component;
