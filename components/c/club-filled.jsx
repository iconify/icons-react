import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygh1u7suj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygh1u7suj"/>`,
		"fallback": "lucide-extended:club-filled",
	});
}

export default Component;
