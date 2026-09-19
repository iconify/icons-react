import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yl-50nbno.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yl-50nbno"/>`,
		"fallback": "dinkie-icons:ejectsymbol",
	});
}

export default Component;
