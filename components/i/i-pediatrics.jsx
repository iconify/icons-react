import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azacryb7c.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azacryb7c"/>`,
		"fallback": "medical-icon:i-pediatrics",
	});
}

export default Component;
