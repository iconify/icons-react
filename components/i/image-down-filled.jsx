import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6e9n0bgt.css';
import '../../css/q/qcetc5ipd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6e9n0bgt"/><path clip-rule="evenodd" class="qcetc5ipd"/>`,
		"fallback": "lucide-extended:image-down-filled",
	});
}

export default Component;
