import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xv48bd8ke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xv48bd8ke"/>`,
		"fallback": "grommet-icons:form-close",
	});
}

export default Component;
