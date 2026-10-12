import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pj896_brl.css';
import '../../css/j/j22w93are.css';
import '../../css/q/qcswzebnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pj896_brl"/><path class="j22w93are"/><path class="qcswzebnf"/>`,
		"fallback": "lucide-extended:file-volume-filled",
	});
}

export default Component;
