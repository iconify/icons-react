import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvc5zobxq.css';
import '../../css/c/curqijbxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvc5zobxq"/><path clip-rule="evenodd" class="curqijbxb"/>`,
		"fallback": "lucide-extended:briefcase-business-filled",
	});
}

export default Component;
