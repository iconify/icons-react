import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtu4mioil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xtu4mioil"/>`,
		"fallback": "heroicons:document-arrow-down",
	});
}

export default Component;
