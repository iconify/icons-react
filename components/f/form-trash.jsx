import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvg8s9_1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvg8s9_1n"/>`,
		"fallback": "grommet-icons:form-trash",
	});
}

export default Component;
