import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjt728jjm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjt728jjm"/>`,
		"fallback": "temaki:bow-and-arrow",
	});
}

export default Component;
