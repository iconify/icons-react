import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/are8-xb3y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="are8-xb3y"/>`,
		"fallback": "uiw:adobe",
	});
}

export default Component;
