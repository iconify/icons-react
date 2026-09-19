import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h17m_sbst.css';

const viewBox = {"width":373,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h17m_sbst"/>`,
		"fallback": "file-icons:firebase",
	});
}

export default Component;
