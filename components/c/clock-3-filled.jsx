import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ws9_ski4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ws9_ski4v"/>`,
		"fallback": "lucide-extended:clock-3-filled",
	});
}

export default Component;
