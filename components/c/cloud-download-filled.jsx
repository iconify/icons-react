import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vl-jafa0z.css';
import '../../css/e/e9d8alb2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vl-jafa0z"/><path class="e9d8alb2w"/>`,
		"fallback": "lucide-extended:cloud-download-filled",
	});
}

export default Component;
