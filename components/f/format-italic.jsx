import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_chv4zoi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="f_chv4zoi"/>`,
		"fallback": "wordpress:format-italic",
	});
}

export default Component;
