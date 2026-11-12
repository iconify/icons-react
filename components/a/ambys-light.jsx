import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tynq3rb6u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tynq3rb6u"/>`,
		"fallback": "selfhst:ambys-light",
	});
}

export default Component;
