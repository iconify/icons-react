import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycwxoq74a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ycwxoq74a"/>`,
		"fallback": "lucide-lab:cup-to-go",
	});
}

export default Component;
