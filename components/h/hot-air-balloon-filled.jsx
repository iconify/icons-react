import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ynb_ho6fv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ynb_ho6fv"/>`,
		"fallback": "lucide-extended:hot-air-balloon-filled",
	});
}

export default Component;
