import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxu8jsb5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxu8jsb5j"/>`,
		"fallback": "lucide-extended:grid-3x2-filled",
	});
}

export default Component;
