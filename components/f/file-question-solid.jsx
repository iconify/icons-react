import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6934xi0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u6934xi0p"/>`,
		"fallback": "iconaut:file-question-solid",
	});
}

export default Component;
