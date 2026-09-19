import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iugo9tbdi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iugo9tbdi"/>`,
		"fallback": "cib:app-store",
	});
}

export default Component;
