import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to5yjxb9u.css';
import '../../css/f/fup3d72ec.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="to5yjxb9u"/><path class="fup3d72ec"/>`,
		"fallback": "selfhst:7-zip",
	});
}

export default Component;
