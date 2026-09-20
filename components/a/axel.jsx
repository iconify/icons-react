import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecy74ybpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ecy74ybpe"/>`,
		"fallback": "token:axel",
	});
}

export default Component;
