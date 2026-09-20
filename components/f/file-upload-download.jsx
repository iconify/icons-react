import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyymuvb1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yyymuvb1x"/>`,
		"fallback": "mdi:file-upload-download",
	});
}

export default Component;
