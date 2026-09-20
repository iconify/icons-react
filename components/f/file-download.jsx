import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppzu5_91m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppzu5_91m"/>`,
		"fallback": "la:file-download",
	});
}

export default Component;
