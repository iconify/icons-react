import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbe4v4n8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbe4v4n8h"/>`,
		"fallback": "thesvg-color:apache-tomcat",
	});
}

export default Component;
