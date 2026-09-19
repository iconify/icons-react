import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9dr0ncsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9dr0ncsw"/>`,
		"fallback": "ci:heading-h6",
	});
}

export default Component;
