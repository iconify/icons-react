import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gih_8gbya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gih_8gbya"/>`,
		"fallback": "lucide-extended:highlighter-filled",
	});
}

export default Component;
