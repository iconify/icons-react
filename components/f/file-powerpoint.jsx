import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bre_3u76o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bre_3u76o"/>`,
		"fallback": "la:file-powerpoint",
	});
}

export default Component;
