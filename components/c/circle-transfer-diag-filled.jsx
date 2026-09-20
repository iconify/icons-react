import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aopfyn13u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aopfyn13u"/>`,
		"fallback": "reicon:circle-transfer-diag-filled",
	});
}

export default Component;
