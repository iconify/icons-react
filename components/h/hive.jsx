import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-t-q3bzs.css';
import '../../css/s/s3ofesarg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-t-q3bzs"/><path class="s3ofesarg"/>`,
		"fallback": "token:hive",
	});
}

export default Component;
