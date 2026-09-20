import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbr6a_bem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbr6a_bem"/>`,
		"fallback": "mynaui:cloud-hail-solid",
	});
}

export default Component;
