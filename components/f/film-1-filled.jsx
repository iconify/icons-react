import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgv2o1bno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cgv2o1bno"/>`,
		"fallback": "tdesign:film-1-filled",
	});
}

export default Component;
