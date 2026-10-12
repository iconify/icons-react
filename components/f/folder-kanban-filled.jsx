import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eh6vfnb6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eh6vfnb6t"/>`,
		"fallback": "lucide-extended:folder-kanban-filled",
	});
}

export default Component;
