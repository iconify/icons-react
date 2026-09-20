import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gq-ydmtln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gq-ydmtln"/>`,
		"fallback": "tdesign:hashtag",
	});
}

export default Component;
