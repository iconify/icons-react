import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3kpty1jk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3kpty1jk"/>`,
		"fallback": "iconamoon:flag-light",
	});
}

export default Component;
