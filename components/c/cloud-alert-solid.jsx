import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vh4xotmes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vh4xotmes"/>`,
		"fallback": "iconaut:cloud-alert-solid",
	});
}

export default Component;
