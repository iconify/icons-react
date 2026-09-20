import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/biljftzdn.css';
import '../../css/x/x56wbk0pr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="biljftzdn"/><path clip-rule="evenodd" class="x56wbk0pr"/>`,
		"fallback": "stash:burger",
	});
}

export default Component;
