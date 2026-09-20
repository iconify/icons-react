import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqh4l-mdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqh4l-mdr"/>`,
		"fallback": "material-icon-theme:astyle",
	});
}

export default Component;
