import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axw66dbsm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axw66dbsm"/>`,
		"fallback": "vadivam:file-archive",
	});
}

export default Component;
