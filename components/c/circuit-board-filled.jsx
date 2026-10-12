import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqk8or5gl.css';
import '../../css/a/a913n8goh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqk8or5gl"/><path class="a913n8goh"/>`,
		"fallback": "lucide-extended:circuit-board-filled",
	});
}

export default Component;
