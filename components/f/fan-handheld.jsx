import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ysbx4jb8g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ysbx4jb8g"/>`,
		"fallback": "lucide-lab:fan-handheld",
	});
}

export default Component;
