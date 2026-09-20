import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brzsx4jtb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brzsx4jtb"/>`,
		"fallback": "lets-icons:colum-up-light",
	});
}

export default Component;
