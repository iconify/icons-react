import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fzo4to9sq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fzo4to9sq"/>`,
		"fallback": "lucide-extended:badge-plus-filled",
	});
}

export default Component;
