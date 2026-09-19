import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhd26jbds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhd26jbds"/>`,
		"fallback": "grommet-icons:connect",
	});
}

export default Component;
