import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3e5i7vvy.css';
import '../../css/e/esqxa_cse.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n3e5i7vvy"/><path class="esqxa_cse"/>`,
		"fallback": "medical-icon:immunizations",
	});
}

export default Component;
