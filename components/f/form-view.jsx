import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apc9u9b0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="apc9u9b0l"/>`,
		"fallback": "grommet-icons:form-view",
	});
}

export default Component;
