import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wllbo2bcu.css';
import '../../css/g/ge98ujwjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wllbo2bcu"/><path class="ge98ujwjz"/>`,
		"fallback": "lucide-extended:database-minus-filled",
	});
}

export default Component;
