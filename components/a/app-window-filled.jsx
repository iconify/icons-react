import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cy5gilhhu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cy5gilhhu"/>`,
		"fallback": "lucide-extended:app-window-filled",
	});
}

export default Component;
