import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hk4m4tjvw.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hk4m4tjvw"/>`,
		"fallback": "whh:heartsparkle",
	});
}

export default Component;
