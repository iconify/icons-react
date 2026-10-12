import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jav-b3ipr.css';
import '../../css/g/gcy3r1rbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jav-b3ipr"/><path class="gcy3r1rbs"/>`,
		"fallback": "lucide-extended:church-filled",
	});
}

export default Component;
