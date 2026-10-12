import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sl_iuno7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sl_iuno7j"/>`,
		"fallback": "lucide-extended:axe-filled",
	});
}

export default Component;
