import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0niglb5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0niglb5t"/>`,
		"fallback": "lucide-lab:elephant-face",
	});
}

export default Component;
