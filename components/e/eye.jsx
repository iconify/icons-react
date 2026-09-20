import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/ve6yaybbw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ve6yaybbw"/>`,
		"fallback": "uiw:eye",
	});
}

export default Component;
