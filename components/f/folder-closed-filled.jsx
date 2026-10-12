import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/se8e1l29k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="se8e1l29k"/>`,
		"fallback": "lucide-extended:folder-closed-filled",
	});
}

export default Component;
