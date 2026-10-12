import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/onjqb9blp.css';
import '../../css/g/g3refjfpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="onjqb9blp"/><path class="g3refjfpl"/>`,
		"fallback": "lucide-extended:folder-git-2-filled",
	});
}

export default Component;
