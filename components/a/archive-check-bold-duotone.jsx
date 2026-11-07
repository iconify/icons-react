import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bl79juz7d.css';
import '../../css/i/i3l80h-5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bl79juz7d"/><path class="i3l80h-5o"/>`,
		"fallback": "solar:archive-check-bold-duotone",
	});
}

export default Component;
