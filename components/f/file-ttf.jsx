import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mo8ud7_4c.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mo8ud7_4c"/>`,
		"fallback": "dinkie-icons:file-ttf",
	});
}

export default Component;
