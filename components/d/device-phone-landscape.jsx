import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oh_6rj7_p.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oh_6rj7_p"/>`,
		"fallback": "f7:device-phone-landscape",
	});
}

export default Component;
