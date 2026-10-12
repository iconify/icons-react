import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3qof8bab.css';
import '../../css/t/tbf2vectn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3qof8bab"/><path clip-rule="evenodd" class="tbf2vectn"/>`,
		"fallback": "lucide-extended:banknote-x-filled",
	});
}

export default Component;
