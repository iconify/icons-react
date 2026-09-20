import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mijns_5go.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mijns_5go"/>`,
		"fallback": "uil:align-left-justify",
	});
}

export default Component;
