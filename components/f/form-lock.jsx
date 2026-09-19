import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/si-jf7b6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="si-jf7b6m"/>`,
		"fallback": "grommet-icons:form-lock",
	});
}

export default Component;
