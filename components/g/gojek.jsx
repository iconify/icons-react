import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jun3midhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jun3midhm"/>`,
		"fallback": "thesvg-color:gojek",
	});
}

export default Component;
