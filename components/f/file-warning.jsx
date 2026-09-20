import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-z4ovd-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-z4ovd-e"/>`,
		"fallback": "lucide:file-warning",
	});
}

export default Component;
