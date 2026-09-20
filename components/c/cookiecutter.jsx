import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfwb0aceo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfwb0aceo"/>`,
		"fallback": "thesvg-color:cookiecutter",
	});
}

export default Component;
