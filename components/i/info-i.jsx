import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltx671b8d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltx671b8d"/>`,
		"fallback": "pinhead:info-i",
	});
}

export default Component;
