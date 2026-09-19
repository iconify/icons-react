import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsp-l3m4u.css';

const viewBox = {"width":957,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lsp-l3m4u"/>`,
		"fallback": "whh:dialpad",
	});
}

export default Component;
