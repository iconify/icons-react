import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdfq_js4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zdfq_js4v"/>`,
		"fallback": "lucide-extended:gauge-filled",
	});
}

export default Component;
