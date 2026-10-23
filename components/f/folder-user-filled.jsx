import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5at6trmc.css';
import '../../css/i/i669q6bvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c5at6trmc"/><path class="i669q6bvw"/>`,
		"fallback": "lucide-extended:folder-user-filled",
	});
}

export default Component;
