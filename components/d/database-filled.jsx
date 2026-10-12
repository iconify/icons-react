import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rq1yx56sg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rq1yx56sg"/>`,
		"fallback": "lucide-extended:database-filled",
	});
}

export default Component;
