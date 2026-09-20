import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eicsqlb_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eicsqlb_t"/>`,
		"fallback": "lucide:badge-plus",
	});
}

export default Component;
