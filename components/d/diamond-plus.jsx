import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbc_il0ub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tbc_il0ub"/>`,
		"fallback": "lucide:diamond-plus",
	});
}

export default Component;
