import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/as5f_obem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="as5f_obem"/>`,
		"fallback": "lucide-extended:hand-filled",
	});
}

export default Component;
