import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fe1t213fe.css';
import '../../css/o/o3xf0rsxp.css';

const viewBox = {"width":8.467,"height":8.467};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="fe1t213fe"/><path class="o3xf0rsxp"/>`,
		"fallback": "thesvg-color:espocrm",
	});
}

export default Component;
