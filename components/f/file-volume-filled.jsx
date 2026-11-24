import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5jau6bgw.css';
import '../../css/j/j22w93are.css';
import '../../css/p/pndt6mbqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e5jau6bgw"/><path class="j22w93are"/><path class="pndt6mbqy"/>`,
		"fallback": "lucide-extended:file-volume-filled",
	});
}

export default Component;
