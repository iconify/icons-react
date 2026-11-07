import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwa9eupgf.css';
import '../../css/s/sqxi4achr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iwa9eupgf"/><path clip-rule="evenodd" class="sqxi4achr"/>`,
		"fallback": "solar:gallery-download-bold-duotone",
	});
}

export default Component;
