import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3wiavcio.css';
import '../../css/b/bno5nxbwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3wiavcio"/><path clip-rule="evenodd" class="bno5nxbwe"/>`,
		"fallback": "lucide-extended:book-search-filled",
	});
}

export default Component;
