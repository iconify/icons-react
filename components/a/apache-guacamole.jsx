import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qtunhlwyo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qtunhlwyo"/>`,
		"fallback": "thesvg-color:apache-guacamole",
	});
}

export default Component;
