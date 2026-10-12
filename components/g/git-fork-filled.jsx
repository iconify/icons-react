import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vb_9fkb4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vb_9fkb4h"/>`,
		"fallback": "lucide-extended:git-fork-filled",
	});
}

export default Component;
