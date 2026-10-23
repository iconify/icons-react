import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adkf8dbfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adkf8dbfi"/>`,
		"fallback": "vadivam:file-volume",
	});
}

export default Component;
