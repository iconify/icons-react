import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wp6fq4atn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wp6fq4atn"/>`,
		"fallback": "lucide-extended:carrot-filled",
	});
}

export default Component;
