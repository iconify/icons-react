import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjl44flrt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjl44flrt"/>`,
		"fallback": "stash:copy-light",
	});
}

export default Component;
