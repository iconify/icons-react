import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdb1cx7ah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdb1cx7ah"/>`,
		"fallback": "iconaut:cloud-sun-solid",
	});
}

export default Component;
