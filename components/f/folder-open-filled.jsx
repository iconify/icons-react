import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ledfk4o7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ledfk4o7d"/>`,
		"fallback": "lucide-extended:folder-open-filled",
	});
}

export default Component;
