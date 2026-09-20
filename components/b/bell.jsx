import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etpu_euix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etpu_euix"/>`,
		"fallback": "lucide:bell",
	});
}

export default Component;
