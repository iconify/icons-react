import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydbm-jb4j.css';

const viewBox = {"width":24,"height":24,"left":-4,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ydbm-jb4j"/>`,
		"fallback": "jam:dj",
	});
}

export default Component;
