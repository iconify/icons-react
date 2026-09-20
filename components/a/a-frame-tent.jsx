import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfyst0acy.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfyst0acy"/>`,
		"fallback": "pinhead:a-frame-tent",
	});
}

export default Component;
