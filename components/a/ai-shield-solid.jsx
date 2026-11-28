import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vsxcxqbrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vsxcxqbrw"/>`,
		"fallback": "iconaut:ai-shield-solid",
	});
}

export default Component;
