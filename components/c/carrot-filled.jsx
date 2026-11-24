import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqtz6_m6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cqtz6_m6n"/>`,
		"fallback": "lucide-extended:carrot-filled",
	});
}

export default Component;
