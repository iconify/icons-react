import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_hu_z_gx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_hu_z_gx"/>`,
		"fallback": "lucide-extended:fish-symbol-filled",
	});
}

export default Component;
