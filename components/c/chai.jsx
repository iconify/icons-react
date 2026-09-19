import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqocbpibn.css';

const viewBox = {"width":444,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqocbpibn"/>`,
		"fallback": "file-icons:chai",
	});
}

export default Component;
