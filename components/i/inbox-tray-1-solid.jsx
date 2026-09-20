import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9s3m40bz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a9s3m40bz"/>`,
		"fallback": "streamline:inbox-tray-1-solid",
	});
}

export default Component;
