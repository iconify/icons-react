import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9yob9b3j.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9yob9b3j"/>`,
		"fallback": "dinkie-icons:biohazard",
	});
}

export default Component;
