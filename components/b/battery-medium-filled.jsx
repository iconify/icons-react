import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-h77mbxq.css';
import '../../css/f/fdgucpbtj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e-h77mbxq"/><path class="fdgucpbtj"/>`,
		"fallback": "lucide-extended:battery-medium-filled",
	});
}

export default Component;
