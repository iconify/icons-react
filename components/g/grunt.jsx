import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eg6t5bctu.css';

const viewBox = {"width":430,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eg6t5bctu"/>`,
		"fallback": "file-icons:grunt",
	});
}

export default Component;
