import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gt28kbi6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gt28kbi6x"/>`,
		"fallback": "thesvg-color:elementary",
	});
}

export default Component;
