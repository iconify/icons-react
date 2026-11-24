import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gd9s1hbcj.css';
import '../../css/m/m4hvdnqig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gd9s1hbcj"/><path class="m4hvdnqig"/>`,
		"fallback": "lucide-extended:doghouse-filled",
	});
}

export default Component;
