import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjmxtcbsh.css';
import '../../css/f/f4-u1zbpr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjmxtcbsh"/><path class="f4-u1zbpr"/>`,
		"fallback": "lucide-extended:file-minus-corner-filled",
	});
}

export default Component;
