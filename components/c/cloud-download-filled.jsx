import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vl-jafa0z.css';
import '../../css/l/lgw0k4bwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vl-jafa0z"/><path class="lgw0k4bwd"/>`,
		"fallback": "lucide-extended:cloud-download-filled",
	});
}

export default Component;
