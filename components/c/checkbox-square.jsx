import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/af1k-_boy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="af1k-_boy"/>`,
		"fallback": "ci:checkbox-square",
	});
}

export default Component;
