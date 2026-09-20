import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ueipv7ldy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ueipv7ldy"/>`,
		"fallback": "streamline:hierarchy-2",
	});
}

export default Component;
