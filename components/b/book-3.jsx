import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9igabbew.css';
import '../../css/w/wpb5j1boy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-secondary-layer m9igabbew"/><path class="duoicon-primary-layer wpb5j1boy"/>`,
		"fallback": "duo-icons:book-3",
	});
}

export default Component;
