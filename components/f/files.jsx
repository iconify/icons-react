import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a1jfi-81a.css';

const viewBox = {"width":24,"height":24,"left":-3,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a1jfi-81a"/>`,
		"fallback": "jam:files",
	});
}

export default Component;
