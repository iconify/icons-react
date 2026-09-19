import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qt6gr-b0x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qt6gr-b0x"/>`,
		"fallback": "file-icons:att",
	});
}

export default Component;
