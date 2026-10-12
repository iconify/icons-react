import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgj9anbxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dgj9anbxe"/>`,
		"fallback": "lucide-extended:folder-git-filled",
	});
}

export default Component;
