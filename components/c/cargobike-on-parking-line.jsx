import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9b49ybjm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9b49ybjm"/>`,
		"fallback": "pinhead:cargobike-on-parking-line",
	});
}

export default Component;
