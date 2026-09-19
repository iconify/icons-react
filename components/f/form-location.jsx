import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yf87t3b2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yf87t3b2s"/>`,
		"fallback": "grommet-icons:form-location",
	});
}

export default Component;
