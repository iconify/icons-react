import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fopn9jr3y.css';
import '../../css/a/a2_u8gbue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fopn9jr3y"/><path class="a2_u8gbue"/>`,
		"fallback": "lucide-extended:file-x-corner-filled",
	});
}

export default Component;
