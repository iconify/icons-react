import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tlue2nbii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tlue2nbii"/>`,
		"fallback": "iconaut:cloud-hail-solid",
	});
}

export default Component;
