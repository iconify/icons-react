import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgmt5_ajv.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgmt5_ajv"/>`,
		"fallback": "dinkie-icons:elevator-small-filled",
	});
}

export default Component;
