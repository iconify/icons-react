import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obb4mh94a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="obb4mh94a"/>`,
		"fallback": "lucide-extended:folder-code-filled",
	});
}

export default Component;
