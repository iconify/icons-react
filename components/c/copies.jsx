import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zawx550ao.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zawx550ao"/>`,
		"fallback": "dinkie-icons:copies",
	});
}

export default Component;
