import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuam72hri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cuam72hri"/>`,
		"fallback": "lucide-extended:git-branch-minus-filled",
	});
}

export default Component;
