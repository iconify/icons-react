import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-2o90bts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-2o90bts"/>`,
		"fallback": "streamline-ultimate:coding-apps-website-web-form-drop-down-menu-1-bold",
	});
}

export default Component;
