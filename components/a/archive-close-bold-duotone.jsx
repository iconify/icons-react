import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3l80h-5o.css';
import '../../css/l/l01_od4ep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i3l80h-5o"/><path clip-rule="evenodd" class="l01_od4ep"/>`,
		"fallback": "solar:archive-close-bold-duotone",
	});
}

export default Component;
