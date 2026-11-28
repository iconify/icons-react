import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ez7i28aau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ez7i28aau"/>`,
		"fallback": "noviair:box-open",
	});
}

export default Component;
