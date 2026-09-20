import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xc1iiuhiv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xc1iiuhiv"/>`,
		"fallback": "streamline:crop-selection-solid",
	});
}

export default Component;
