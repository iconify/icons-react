import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xco31rbaj.css';
import '../../css/f/f_0-3nbdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xco31rbaj"/><path class="f_0-3nbdc"/>`,
		"fallback": "lucide-extended:house-filled",
	});
}

export default Component;
