import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g543_ly2k.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g543_ly2k"/>`,
		"fallback": "fa-solid:burn",
	});
}

export default Component;
