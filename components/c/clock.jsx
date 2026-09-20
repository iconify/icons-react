import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vx416jb3p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vx416jb3p"/>`,
		"fallback": "ooui:clock",
	});
}

export default Component;
